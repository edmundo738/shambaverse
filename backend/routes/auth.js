const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Endpoint em construção', resource: 'auth' });
});

module.exports = router;
