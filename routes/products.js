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

//add product
router.post('/newProduct', function(req, res, next){
    var product = req.body;
    db.products.save(product, function(err, product){
        if(err){
            res.send(err);
        }
        res.json(product);
    });
});

// Get Single product
router.get('/product/:id', function(req, res, next){
    db.products.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, product){
        if(err){
            res.send(err);
        }
        res.json(product);
    });
});

//remove product
router.delete('/product/:id', function(req, res, next){
    db.products.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, product){
        if(err){
            res.send(err);
        }
        res.json(product);
    });
});

module.exports = router;
