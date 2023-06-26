const express = require('express');
const bookRouter = require('./bookRoutes');

const router = express.Router();

// Mount books routes
router.use('/books', bookRouter);

module.exports = router;
