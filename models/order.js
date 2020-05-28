const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    customer:
    {
        type: Schema.Types.ObjectId,
        ref: "Customer",
        required: "An order needs a customer."
    },
    product:
    {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: "An order needs a product."
    },
    qty: Number,
    orderDate: {
        type: Date,
        default: Date.now
    }
    //  qty: {
    //     type: Number,
    //     default: 1
    // },
    // orderDate: {
    //     type: Date,
    //     default: Date.now()
    // }
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;