const { Pool } = require('pg');
const pool = new Pool();

exports.getProducts = async (req, res) => {
  try {
    const {
      category,
      location,
      minPrice,
      maxPrice,
      search,
      page = 1,
      limit = 20,
    } = req.query;

    let query = `
      SELECT p.*, u.name as seller_name, u.avatar as seller_avatar,
             (SELECT AVG(rating) FROM reviews WHERE seller_id = p.seller_id) as seller_rating
      FROM products p
      JOIN users u ON p.seller_id = u.id
      WHERE p.status = 'active'
    `;

    const params = [];
    let paramCount = 0;

    if (category) {
      paramCount += 1;
      query += ` AND p.category = $${paramCount}`;
      params.push(category);
    }

    if (location) {
      paramCount += 1;
      query += ` AND p.location ILIKE $${paramCount}`;
      params.push(`%${location}%`);
    }

    if (minPrice) {
      paramCount += 1;
      query += ` AND p.price >= $${paramCount}`;
      params.push(minPrice);
    }

    if (maxPrice) {
      paramCount += 1;
      query += ` AND p.price <= $${paramCount}`;
      params.push(maxPrice);
    }

    if (search) {
      paramCount += 1;
      query += ` AND (p.title ILIKE $${paramCount} OR p.description ILIKE $${paramCount})`;
      params.push(`%${search}%`);
    }

    query += ' ORDER BY p.is_featured DESC, p.created_at DESC';

    const offset = (page - 1) * limit;
    paramCount += 1;
    query += ` LIMIT $${paramCount}`;
    params.push(limit);
    paramCount += 1;
    query += ` OFFSET $${paramCount}`;
    params.push(offset);

    const result = await pool.query(query, params);

    const countResult = await pool.query(
      "SELECT COUNT(*) FROM products p WHERE p.status = 'active'",
      []
    );

    res.json({
      products: result.rows,
      pagination: {
        page: parseInt(page, 10),
        limit: parseInt(limit, 10),
        total: parseInt(countResult.rows[0].count, 10),
        pages: Math.ceil(countResult.rows[0].count / limit),
      },
    });
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { title, description, price, unit, quantity, category, location, images } = req.body;
    const sellerId = req.user.id;

    const result = await pool.query(
      `INSERT INTO products 
       (seller_id, title, description, price, unit, quantity, category, location, images, status)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, 'active')
       RETURNING *`,
      [sellerId, title, description, price, unit, quantity, category, location, JSON.stringify(images)]
    );

    const io = req.app.get('io');
    io.emit('new-product', {
      product: result.rows[0],
      seller: req.user,
    });

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Erro ao criar produto:', error);
    res.status(500).json({ error: 'Erro ao criar produto' });
  }
};

exports.getPriceAnalytics = async (req, res) => {
  try {
    const { product, region, days = 30 } = req.query;

    const result = await pool.query(
      `SELECT 
        DATE(created_at) as date,
        AVG(price) as avg_price,
        MIN(price) as min_price,
        MAX(price) as max_price,
        COUNT(*) as total_sales
       FROM products
       WHERE title ILIKE $1 
         AND location ILIKE $2
         AND created_at >= NOW() - INTERVAL '${days} days'
         AND status = 'sold'
       GROUP BY DATE(created_at)
       ORDER BY date DESC`,
      [`%${product}%`, `%${region}%`]
    );

    res.json({
      product,
      region,
      period: `${days} dias`,
      data: result.rows,
    });
  } catch (error) {
    console.error('Erro na análise de preços:', error);
    res.status(500).json({ error: 'Erro ao analisar preços' });
  }
};
