const express = require("express");
const router = express.Router();
const { userSignup } = require("../Controller/usersController");
const { jwtProtect } = require("../middleware/jwtProtect");

router.post("/signup", userSignup);

module.exports = router;
