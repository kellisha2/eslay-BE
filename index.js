require('dotenv').config();
const express = require ('express');
const app = express();
const PORT = process.env.PORT || 5050;
const conn = require ('./config/db');
const currentProducts = require("./seeds/seed")
const Product = require('./models/products')
const productRoutes = require('./routes/productRoutes')



app.use(express.json()) 

app.use("/api/products" , productRoutes )

conn()

//   app.get('/products/get' , (req, res) => {
//     Product.find((data, err)) => {
//         if (data) {
//             res.status(200).send(data);
//         } else {
//             res.status(500).send(err)
//         }
//     }
//   })


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})