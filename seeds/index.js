require('dotenv').config();
const conn = require('../config/db');
const Product = require("../models/products");
const currentProducts = require("./seed");

const initSeed = async () => {
    try {
        await conn();
        await Product.deleteMany({})
        await Product.create(currentProducts)
    } catch (error) {
        console.log(`Something went wrong loading seed data: ${error.message}`)
    }
}

initSeed();