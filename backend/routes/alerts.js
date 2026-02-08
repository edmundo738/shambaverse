const express = require('express');
const router = express.Router();
const alertController = require('../controllers/alertController');

router.get('/', alertController.listAlerts);
router.post('/', alertController.createAlert);

module.exports = router;
