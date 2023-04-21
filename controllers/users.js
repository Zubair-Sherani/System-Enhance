const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


// Load User model
const User = require("../models/UserSchema");

// Load sendMail
const { sendMail } = require("../mail")

// Load email templates
const templates = require('../mail_templates/templates');

// @route POST api/users/register
// @desc Register user
// @access Public

const register = (req, res) => {

    User.findOne({ email: req.body.email }).then(user => {

        if (user) {
            return res.status(400).json({ email: "Email already exists" });
        } else {
            const { username, email, password, joining_date, first_name, last_name, phone_number, address, job_history, needs, wants, behaviour } = req.body;
            const newUser = new User({
                username, email, password, joining_date, first_name, last_name, phone_number, address, job_history, needs, wants, behaviour
            });

            // Hash password before storing in database
            const rounds = 10;
            bcrypt.genSalt(rounds, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    const signUp = templates.signUp;
                    const signInToAccount = templates.signInToAccount
                    newUser
                        .save()
                        .then(user => res.json(user))
                        .then(sendMail(email, signUp.subject, signUp.html))
                        .then(setTimeout(() => {
                            sendMail(email, signInToAccount.subject, signInToAccount.html);
                          }, 2000))
                        .catch(err => console.log(err));
                });
            });

        }
    });

}

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public

const login = (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    //Find user by Email
    User.findOne({ email }).then(user => {
        if (!user) {
            return res.status(404).json({ emailnotfound: "Email not found" });
        }

        // Check password
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                // Create JWT Payload
                const payload = {
                    id: user.id,
                    name: user.name
                };

                // Sign token
                jwt.sign(
                    payload,
                    process.env.JWT_SECRET,
                    {
                        expiresIn: 31556926
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        });
                    }
                );
                const signIn = templates.signIn;
                sendMail(email, signIn.subject, signIn.html);
            } else {
                return res
                    .status(400)
                    .json({ passwordincorrect: "Password incorrect" });
            }
        });
    });
};

module.exports = {
    register,
    login
};