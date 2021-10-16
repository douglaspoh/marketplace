const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
require('dotenv/config');
const Customer = require('./models/Customer');
const Category = require('./models/Category');
const Product = require('./models/Product');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req,res) => {
    res.send('Home page of products');
})

app.get('/categories', async (req,res) => {
    const categories = await Category.find();
    if(!categories){
        res.status(500).send('Could not fetch categories')
    } else{
        res.status(200).send(categories)
    }
});

app.get('/products', async (req,res) => {
    const products = await Product.find();
    if(!products){
        res.status(500).send('Could not fetch products')
    } else{
        res.status(200).send(products)
    }
})

app.post('/register', async (req,res) => {
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
        res.status(201).send(customer);
    } catch{
        res.status(500).send('Hashing error');
    }
})

app.post('/login', async (req,res) => {
    const customer = await Customer.findOne({username: req.body.username})
    if(customer==null){
        res.status(400).send('Username is incorrect');
    }
    try{
        if(await bcrypt.compare(req.body.password, customer.password)){
            res.send('Login successful')
        } else{
            res.send('Password incorrect');
        }
    } catch{
        res.status(500).send('Bcrypt error');
    }
})

mongoose.connect(
    process.env.DB_CONNECTION,
    ()=>console.log('Connected to mongoDB...')
)

const port = process.env.PORT || 3001
app.listen(port, ()=>console.log(`Listening on port ${port}...`))