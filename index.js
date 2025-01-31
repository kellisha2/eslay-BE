require('dotenv').config();
const express = require ('express');
const app = express();
const PORT = process.env.PORT || 5050;
const conn = require ('./config/db');
const currentProducts = require("./config/seed")
const Product = require('./models/products')
const productRoutes = require('./routes/productRoutes')



app.use(express.json()) 

app.use("/api/products" , productRoutes )

conn()


app.get('/', (req, res) =>{
    res.send('Home Page')
})



app.get('/products/seed' , async (req, res) =>{
    try {
      await Product.deleteMany({})
      await Product.create(currentProducts)
      res.json(currentProducts)
    } catch (error) {
      console.log(`Something went wrong loading seed data: ${error.message}`)
    }
  })


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})