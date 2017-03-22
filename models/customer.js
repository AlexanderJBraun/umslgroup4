const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const CustomerSchema = mongoose.Schema({
  username: {
    type: String
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  businessName: {
    type: String
  },
  passWord: {
    type: String
  },
  email: {
    type: String
  }
});

module.exports.getCustomerById = function(id, callback){
  Customer.findById(id, callback);
}

const Customer = module.exports = mongoose.model('Customer', CustomerSchema);


