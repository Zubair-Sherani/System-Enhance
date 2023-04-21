// Load User model
const User = require("../models/UserSchema");
// Load Feedback model
const Feedback = require("../models/FeedbackSchema");
// Load sendMail
const { sendMail } = require("../mail")

// Load email templates
const templates = require('../mail_templates/templates');


const addFeedback = (req, res) => {
    User.findOne({_id: req.body._id}).then(user => {
        if(!user){
            return res.status(404).json({error: "User not found. Please sign up first."});
        }
        else{
            const { user_id, subject, description } = req.body;
            const newFeedback = new Feedback({
                user_id, subject, description
            });
            const feedback = templates.feedback;
            const email = user.email;
            newFeedback
                .save()
                .then(newFeedback => res.json(newFeedback))
                .then(sendMail(email, feedback.subject, feedback.html))
                .catch(err => console.log(err));
        }
    })
    

}


module.exports = {
    addFeedback
}