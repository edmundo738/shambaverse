const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Endpoint em construção', resource: 'posts' });
});

module.exports = router;
