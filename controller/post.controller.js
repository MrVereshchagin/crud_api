const postDao = require('../dao/post.dao');
var postController = {
    
    findPosts: findPosts
    
}



function findPosts(req, res) {
    postDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = postController;