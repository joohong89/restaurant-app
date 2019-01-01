const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Order = new Schema(
  {
    status: String,
    total: Number,
    details: []
  },{collection: 'Order'}
);

module.exports = mongoose.model('Order', Order);
