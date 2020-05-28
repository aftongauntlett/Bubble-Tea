const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/customers", function (req, res) {
    db.Customer.find({}).then(results => {
        res.json(results);
    });
});

module.exports = router;
