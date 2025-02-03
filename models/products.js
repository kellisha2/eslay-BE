const mongoose = require ('mongoose')

const productSchema = new mongoose.Schema({
    img: {
        type:String,
        required: true,
    },
 
    name:{
        type:String,
        required: true,
    },

    price:{
        type:Number,
        required: true,
    },

    description:{
        type:String,
        required: true,
    },

    size:{
        type:String,
        enum: ["Small", "Medium", "Large", "X-Large" ],
        required: true,
    },

    brand:{
        type:String,
        required: true,
    },

    condition:{
        type: String,
        enum: ["New", "Like New", "Very Good", "Good", "Acceptable"],
        required: true,
    },


    category: {
        type: String,
        enum: ["Top", "Bottom", "Dress", "Outerwear", "Jumpsuit", "Matching Set", "Accessories"],
        required: true,
    },

    gender: {
        type: String,
        enum: ["Men", "Women", "Unisex"],
        required: true,
    }


    
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product