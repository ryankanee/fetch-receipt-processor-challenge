const { v4: uuidv4 } = require('uuid');

const receipts = {};
let currId = 1

exports.processReceiptModel = (receipt) => {
    const id = currId++;
    receipts[id] = receipt;
    return id;
};

exports.getReceiptById = (id) => {
    return receipts[id];
};
