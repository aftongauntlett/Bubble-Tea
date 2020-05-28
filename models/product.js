const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    inventory: Number
});

// const ProductSchema = new Schema({
//     name: {
//         type: String,
//         trim: true,
//         required: "A product must have a name."
//     },
//     description: {
//         type: String
//     },
//     price: {
//         type: Number,
//         default: 0
//     },
//     inventory: {
//         type: Number,
//         default: 0
//     }
// });

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;