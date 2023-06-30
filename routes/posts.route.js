const express = require('express');
const router = express.Router();
const postController = require('../controller/post.controller');


router.get('/', postController.findPosts);


module.exports = router;