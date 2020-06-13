const router = require('express').Router()
const pageController = require('../controllers/page.controller')
const userController = require('../controllers/user.controller')
const postController = require('../controllers/post.controller')

router.use(function isAuthenticated(req, res, next) {

    if(!req.user){
        return res.redirect('/login')
    }

    next()
})

//User

router.get('/user', userController.readProfile, pageController.renderProfile)

router.get('/user/createProfile', pageController.renderProfileCreate)

router.post('/user/createProfile', userController.createProfile)

router.post('/user/uploadProfilePicture', userController.uploadProfilePhoto)

router.get('/user/editProfile', userController.readProfile ,pageController.renderProfileEdit)

router.patch('/user/editProfile', userController.updateProfile)

router.get('/user/myPosts', postController.readUserPosts, pageController.renderUserPosts)

//Post

router.get('/posts', postController.readAllPosts, pageController.renderAllPosts)

router.get('/post/:postId', postController.readPost, postController.readAllComments, pageController.renderPost)

router.get('/post/:postId/editPost', postController.readPost, pageController.renderPostEdit)

router.patch('/post/:postId/editPost', postController.updatePost)

router.delete('/post/:postId', postController.deletePost)

router.get('/posts/createNewPost', pageController.renderPostCreate)

router.post('/posts/createNewPost', postController.createPost)

//Comment

router.get('/post/:postId/comment/writeComment', pageController.renderCommentCreate)

router.post('/post/:postId/comment/writeComment', postController.createComment)

router.get('/post/:postId/comment/:commentId', postController.readComment, pageController.renderComment)

router.patch('/post/:postId/comment/:commentId/editComment', postController.updateComment)

router.delete('/post/:postId/comment/:commentId/deleteComment', postController.deleteComment)

//Like

router.post('/post/:postId/like', postController.changeLikeStatus)

module.exports = router