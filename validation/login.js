
const { body, validationResult } = require('express-validator');

const validateLoginInput = [
    body('email')
      .notEmpty().withMessage('Email field is required')
      .isEmail().withMessage('Email is invalid'),
    body('password')
      .notEmpty().withMessage('Password field is required'),
    (req, res, next) => {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
  ];
  
  module.exports = {
    validateLoginInput
  };