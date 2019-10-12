const express = require('express');
const router = express.Router(); //setting up router with express
const mongoose = require('mongoose');
const passport = require('passport');
const fileUpload = require('express-fileupload');

//Post model
const Post = require('../../models/Post');

//validation
const validationPostInput = require('../../validation/post')

//@route    GET api/posts/test
//@desc     Tests post route
//@access   Public
router.get('/test' , (req, res) => res.json({ msg: 'POSTS WORKS' }));


//@route    POST api/posts
//@desc     Create post
//@access   Private
router.post('/', passport.authenticate('jwt', { session: false }), ( req,res) => {
    const { errors, isValid }= validationPostInput(req.body);

    //check validation
    if(!isValid){
        //if any errors, send 4000 with errros object
        return res.status(400).json(errors);
    }

    //Uplaod Endpoint
    if(req.file === null){
      return res.status(400).json({msg: 'No file uploaded'});
    }

    const file = req.files.file;
    const imageinfo = new Date().toISOString() + file.name;
    
    const newPost = new Post({
        text: req.body.text,
        name: req.body.name,
        avatar: req.body.avatar,
        user: req.user.id,
        file: imageinfo
        //file: req.files.file
    });

    file.mv(`./uploads/${file.name}`, err => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }
     // res.json({ fileName: file.name, filePath: `/uploads/${ file.name}` });
    });
    newPost.save().then(post => res.json(post));
});

module.exports = router;