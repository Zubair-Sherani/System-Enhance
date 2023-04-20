const { body, validationResult } = require('express-validator');

// Load User model
const User = require("../models/UserSchema");

const registerValidation = [
    body('username').trim().isLength({ min: 5, max: 10 }).withMessage('Length should be between 5 and 10')
        .matches(/^[a-zA-Z0-9]+$/).withMessage('Username should not contain special characters')
        .custom(async (value, { req }) => {
            const user = await User.findOne({ username: value });
            if (user) {
                return Promise.reject('Username already taken');
            }
        }),
    body('email').isEmail().withMessage('Please enter a valid email address')
        .custom(async (value, { req }) => {
            const user = await User.findOne({ email: value });
            if (user) {
                return Promise.reject('Email already in use');
            }
        }),
    body('password', 'Password field is required').notEmpty(),
    body('password2', 'Confirm Password field is required').notEmpty(),
    body('password')
        .isLength({ min: 8 })
        .withMessage('Password should be at least 8 characters long')
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\da-zA-Z]).{8,}$/)
        .withMessage('Password should contain at least one uppercase letter, one lowercase letter, and one digit'),
    body('password2').custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error('Passwords must match');
        }
        return true;
    }),
    body('first_name', 'First Name field is required').notEmpty(),
    body('last_name', 'Last Name field is required').notEmpty(),
    body('phone_number', 'Phone Number field is required').notEmpty(),
    body('address', 'Address field is required').notEmpty(),
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
    registerValidation
};