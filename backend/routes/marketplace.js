const express = require('express');
const router = express.Router();
const marketController = require('../controllers/marketController');

router.get('/', marketController.getProducts);
router.post('/', marketController.createProduct);
router.get('/analytics/prices', marketController.getPriceAnalytics);

module.exports = router;
