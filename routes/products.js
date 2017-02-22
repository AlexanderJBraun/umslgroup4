const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Product = require('../models/product');
const mongojs = require('mongojs');
const db = mongojs('mongodb://dbuser:dbpassword@ds147799.mlab.com:47799/userdatabase');


// Get products
router.get('/products', function(req, res, next){
    db.products.find(function(err, products){
        if(err){
            res.send(err);
        }
        res.json(products);
    });
});


module.exports = router;
