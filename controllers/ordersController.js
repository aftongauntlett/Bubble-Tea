const express = require("express");
const router = express.Router();
const db = require("../models");
const path = require("path");


router.get("/api/orders", function (req, res) {
    db.Order.find({}).populate("customer product").then(results => {
        res.json(results);
    });
});

router.get("/orders", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/orders.html"));
})

module.exports = router;
