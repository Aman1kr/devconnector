const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const UserSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    email: {
        type: String,
        required: true
       // match: /^[A-Z0-9._%+-]+@[A-Z]+\.[A-Z]{2,4}$/i
    },///^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
    password: {
        type: String,
        required: true

        //match: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[_.;@!`~%+-]).{8,20}$/
        //minlength: 8
    },
    avatar: {
        type: String
    },
    date:{
        type: Date,
        default: Date.now
    },
});

module.exports = User = mongoose.model('users', UserSchema);