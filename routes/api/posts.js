const express = require('express');
const router = express.Router(); //setting up router with express

//@route    GET api/posts/test
//@desc     Tests post route
//@access   Public
router.get('/test' , (req, res) => res.json({ msg: 'POSTS WORKS' }));

module.exports = router;