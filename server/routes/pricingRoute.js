const express = require("express");
const router = express.Router();
const { addPrices } = require("../controllers/pricingControllers.js");
const middleware = require("../middelware/authmiddelware.js");
router.post("/addPrices/:id", middleware, addPrices);

module.exports = router;
