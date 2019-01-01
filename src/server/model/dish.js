const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Dish = new Schema(
  {
    name: String,
    imageUrl: String,
    large: Number,
    medium: Number,
    small:  Number
  },{
    collection: 'Dish'
  });

module.exports = mongoose.model('Dish', Dish);
