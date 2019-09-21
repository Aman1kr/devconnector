const express = require('express');
const router = express.Router(); //setting up router with express

//@route    GET api/profile/test
//@desc     Tests profile route
//@access   Public
router.get('/test' , (req, res) => res.json({ msg: 'PROFILE WORKS' }));

module.exports = router;