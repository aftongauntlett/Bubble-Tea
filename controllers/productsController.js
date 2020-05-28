const express = require("express");
const router = express.Router();
const db = require("../models");


router.get("/products", function (req, res) {
    db.Product.find({}).then(results => {
        res.json(results);
    });
});

// router.get("/product/:id", function (req, res) {
//     res.sendFile(path.join(__dirname, "./public/product.html"));
// });

// router.get("/api/getProduct/:id", function (req, res) {
//     db.Product.find({ _id: req.params.id }).then(results => {
//         res.json(results);
//     });
// });

// router.post("/api/form/", function (req, res) {
//     db.Customer.create({
//         fname: req.body.name,
//         email: req.body.email
//     }).then(customer => {
//         db.Order.create({
//             customer: customer._id,
//             product: req.body.productId,
//             qty: req.body.quantity
//         }).then(order => {
//             console.log("order._id is: " + order._id);
//             console.log("customer._id is: " + customer._id);
//             db.Customer.findOneAndUpdate(
//                 { _id: customer._id },
//                 {
//                     $push: { orders: order._id }
//                 }
//                 //{new: true}
//             );
//         });
//     })
// })

module.exports = router;
