import React from 'react';

export const ProductCard = ({ product }) => {
  return (
    <article style={styles.container}>
      <div style={styles.media}>
        <span style={styles.emoji}>{product.emoji || '🌾'}</span>
        {product.badge && <span style={styles.badge}>{product.badge}</span>}
      </div>
      <div style={styles.content}>
        <h3 style={styles.title}>{product.title}</h3>
        <p style={styles.location}>{product.location}</p>
        <div style={styles.footer}>
          <div>
            <strong style={styles.price}>{product.price} Kz</strong>
            <div style={styles.unit}>{product.unit}</div>
          </div>
          <span style={styles.seller}>{product.seller}</span>
        </div>
        <p style={styles.quantity}>{product.quantity}</p>
      </div>
    </article>
  );
};

const styles = {
  container: {
    backgroundColor: '#161b22',
    borderRadius: 12,
    border: '1px solid #30363d',
    overflow: 'hidden',
  },
  media: {
    position: 'relative',
    height: 140,
    backgroundColor: '#21262d',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: {
    fontSize: '3rem',
  },
  badge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: '#da3633',
    color: '#fff',
    padding: '0.2rem 0.6rem',
    borderRadius: 20,
    fontSize: '0.7rem',
    fontWeight: 700,
  },
  content: {
    padding: '1rem',
  },
  title: {
    color: '#e6edf3',
    margin: '0 0 0.5rem',
  },
  location: {
    color: '#7d8590',
    margin: 0,
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '0.5rem',
  },
  price: {
    color: '#3fb950',
    fontSize: '1.1rem',
  },
  unit: {
    color: '#7d8590',
    fontSize: '0.75rem',
  },
  seller: {
    color: '#7d8590',
  },
  quantity: {
    color: '#7d8590',
    marginTop: '0.5rem',
  },
};
