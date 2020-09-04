const express = require("express");
const ctrl = require("../controllers/stats-controller");

const router = express.Router();

router.post("/", ctrl.handlePing);

module.exports = router;
