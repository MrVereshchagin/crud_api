const Post = require('../models/Post');
var postDao = {
    findAll: findAll
  
}

function findAll() {
    return Post.findAll();
}


module.exports = postDao;