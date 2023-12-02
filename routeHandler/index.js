const express = require("express");

const noteHandler = require("./noteHandler");
const userHandler = require("./userHandler");
const companyHandler = require("./companyHandler");
const clearingHandler = require("./clearingHandler");
const carryingHandler = require("./carryingHandler");
const nocHandler = require("./nocHandler");


const router = express.Router();

router.use("/note", noteHandler);
router.use("/user", userHandler);
router.use("/company", companyHandler);
router.use("/clearing_bills", clearingHandler);
router.use("/carrying_bills", carryingHandler);
router.use("/noc_bills", nocHandler);


module.exports = router;
