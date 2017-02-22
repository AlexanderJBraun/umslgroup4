const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const ProductSchema = mongoose.Schema({
  name: {
    type: String
  },
  itemDescription: {
    type: String
  },
  price: {
    type: Number
  },
  inStock: {
    type: Number,
  },
});

module.exports.getProductById = function(id, callback){
  Product.findById(id, callback);
}

const Product = module.exports = mongoose.model('Product', ProductSchema);


