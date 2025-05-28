const express = require('express');
const router = express.Router();

const receiptsController = require('../controller/receiptsController');

// POST /receipts/process
router.post('/process', receiptsController.processReceipt);

// GET /receipts/:id/points
router.get('/:id/points', receiptsController.getReceiptPoints);

module.exports = router;
