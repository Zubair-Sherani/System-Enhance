const { body, validationResult } = require('express-validator');

const feedbackValidation = [
    // Validate the subject field
    body('subject')
      .trim()
      .isLength({ min: 5, max: 40 })
      .withMessage('Subject should be between 5 to 40 characters long'),

    // Validate the description field
    body('description')
      .trim()
      .isLength({ min: 100, max: 5000 })
      .withMessage('Description should be between 100 to 5000 characters long'),
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
    feedbackValidation
}

