const { v4: uuidv4 } = require('uuid');

const receipts = {};

exports.processReceiptModel = (receipt) => {
    const id = uuidv4();
    receipts[id] = receipt;
    return id;
};

exports.getReceiptById = (id) => {
    return receipts[id];
};
