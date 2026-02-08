const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

router.get('/', chatController.listChats);
router.post('/messages', chatController.sendMessage);

module.exports = router;
