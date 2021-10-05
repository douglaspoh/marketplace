const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const Customer = require('./models/Customer');

const app = express();
app.use(express.json());
app.use(cors);

app.get('/', (req,res) => {
    res.send('Home page of products');
})

app.post('/register', (req,res) => {
    const customer = new Customer ({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        postal_code: req.body.postal_code,
        gender: req.body.gender,
        created_at: req.body.created_at
    })
    const checkEmail = await Customer.findOne({email: req.body.email})
    if(checkEmail!==null){
        return res.status(400).send('Email is already registered.');
    }
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        customer.password = hashedPassword;
        customer.save();
        res.status(201).send(user);
    } catch{
        res.status(500).send('Hashing error');
    }
})