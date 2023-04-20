const express = require("express");
const router = express.Router();


// Load input validation
const { registerValidation } = require("../../validation/register");
const { validateLoginInput } = require("../../validation/login");

//Load user controller functions
const {register, login} = require("../../controllers/users")


// @route POST api/users/register
// @desc Register user
// @access Public

router.post("/register", registerValidation, register);

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public

router.post("/login", validateLoginInput, login);

module.exports = router;