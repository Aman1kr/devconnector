const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB express
const db = require('./config/keys').mongoURI;

//connect mongoDB
mongoose.connect(db) //,  {useNewUrlParser:true}
    .then(() => console.log('MongoDB Conneted'))
    .catch(err => console.log(err));


// Passport middleware
app.use(passport.initialize());

//Passport Config
require('./config/passport')(passport);

app.get('/', (req, res) => res.send('Hello')); // res to send data

//use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);


const port = process.env.PORT || 5000 //hurroke and local

app.listen(port, () => console.log(`Server running on port ${port}`));