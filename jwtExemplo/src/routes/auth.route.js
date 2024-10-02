const express = require('express');
const router = express.Router();
const authController = require("../controllers/auth.controller");
const { tokenValited } = require('../../auth');

router.get("/",authController.public);
router.get("/login",authController.login);

router.use("*", tokenValited)
router.get("/private",authController.private);

module.exports = router;