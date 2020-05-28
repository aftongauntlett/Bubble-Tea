const db = require("./models");
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const productsRoutes = require("./controllers/productsController.js")
const customersRoutes = require("./controllers/customersController.js")
const ordersRoutes = require("./controllers/ordersController.js")

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(productsRoutes);
app.use(customersRoutes);
app.use(ordersRoutes);

app.use(express.static("public"));


app.get("/product/:id", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/product.html"));
});

app.get("/api/getProduct/:id", function (req, res) {
    db.Product.find({ _id: req.params.id }).then(results => {
        res.json(results);
    });
});

app.post("/api/form/", function (req, res) {
    db.Customer.create({
        fname: req.body.name,
        email: req.body.email
    }).then(customer => {
        db.Order.create({
            customer: customer._id,
            product: req.body.productId,
            qty: req.body.quantity
        }).then(order => {
            console.log("order._id is: " + order._id);
            console.log("customer._id is: " + customer._id);
            db.Customer.findOneAndUpdate(
                { _id: customer._id },
                {
                    $push: { orders: order._id }
                }
                //{new: true}
            );
        });
    })
})

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/storedb", { useNewUrlParser: true });



app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});

// db.Product.create({ name: "Slush", description: "Taro Slush", price: "4.50", inventory: 30 })
// db.Product.create({ name: "Milk Tea", description: "Winter Melon Milk Green Tea", price: "3.50", inventory: 20 })
// db.Product.create({ name: "Punch", description: "Mango Green Tea Punch", price: "2.50", inventory: 30 })
// db.Product.create({ name: "Classic", description: "Thai Iced Tea", price: "3.50", inventory: 25 })
// db.Product.create({ name: "Milk Cap", description: "Oolong Tea Cap", price: "3.00", inventory: 20 })