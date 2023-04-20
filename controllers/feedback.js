// Load User model
const User = require("../models/UserSchema");
// Load Feedback model
const Feedback = require("../models/FeedbackSchema");


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
            newFeedback
                .save()
                .then(newFeedback => res.json(newFeedback))
                .catch(err => console.log(err));
        }
    })
    

}


module.exports = {
    addFeedback
}