const receiptsModel = require('../models/receiptsModel');
const { calcPoints } = require('../services/pointService');

exports.processReceipt = (req, res) => {
    const receipt = req.body;

    if (
        !receipt.retailer ||
        !receipt.purchaseDate ||
        !receipt.purchaseTime ||
        !receipt.total ||
        !Array.isArray(receipt.items)
    ) {
        return res.status(400).json({ error: 'The receipt is invalid.' });
    }

    const id = receiptsModel.processReceiptModel(receipt);
    res.status(200).json({ id });
};

exports.getReceiptPoints = (req, res) => {
    const id = req.params.id;
    const receipt = receiptsModel.getReceiptById(id);

    if (!receipt) {
        return res.status(404).json({ error: 'No receipt found for that ID.' });
    }

    const points = calcPoints(receipt);

    res.status(200).json({ points });
};
