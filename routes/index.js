const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homepage");
//
router.get('/homepage', homeController.getHomePage);

module.exports = router;