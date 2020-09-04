const express = require("express");
const ctrl = require("../controllers/pages-controller");

const router = express.Router();

router.get("/", ctrl.homePage);

module.exports = router;
