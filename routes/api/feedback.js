const express = require("express");
const router = express.Router();

// Load input validation
const { feedbackValidation } = require("../../validation/feedback");


// Load feedback controller functions
const { addFeedback } = require("../../controllers/feedback")

// @route POST api/feedback
// @access Public

router.post("/", feedbackValidation, addFeedback);

module.exports = router;