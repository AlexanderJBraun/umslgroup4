const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Customer = require('../models/customer');
const mongojs = require('mongojs');
const db = mongojs('mongodb://localhost:27017/liquidNitro');


// Get customres
router.get('/customers', function(req, res, next){
    db.customers.find(function(err, customers){
        if(err){
            res.send(err);
        }
        res.json(customers);
    });
});

//add customer
router.post('/newCustomer', function(req, res, next){
    var customer = req.body;
    db.customers.save(customer, function(err, customer){
        if(err){
            res.send(err);
        }
        res.json(customer);
    });
});

// Get Single customer
router.get('/customer/:id', function(req, res, next){
    db.customers.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, customer){
        if(err){
            res.send(err);
        }
        res.json(customer);
    });
});

//remove customer
router.delete('/customer/:id', function(req, res, next){
    db.customers.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, customer){
        if(err){
            res.send(err);
        }
        res.json(customer);
    });
});

module.exports = router;
