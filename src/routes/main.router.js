const router = require('express').Router()
const dbService  =require('../services/database.service')
const pageController = require('../controllers/page.controller')
const userController = require('../controllers/user.controller')
const postController = require('../controllers/post.controller')
const searchController = require('../controllers/search.controller')
const mailController = require('../controllers/mail.controller')

router.use(function isAuthenticated(req, res, next) {

    if(!req.user){
        return res.redirect('/login')
    }
    else if(req.user){
        dbService.findProfile(req.user._id, (err, profile) => {
            if (err) return next(err)

            if(!profile){
                req.user.profile = {
                    userId: req.user._id,
                    email: req.user.email,
                    profilePicture: 'default.jpg'
                }
            }
            else {
                req.user.profile = profile
            }
            next()   
        })
    }
})

//User

router.get('/user', pageController.renderProfile)

router.get('/user/createProfile', pageController.renderProfileCreate)

router.post('/user/createProfile', userController.createProfile)

router.get('/user/profilePicture', userController.readProfilePhoto)

router.get('/users/:userId/profilePicture', userController.readUsersProfilePhoto)

router.post('/user/uploadProfilePicture', userController.uploadProfilePhoto)

router.delete('/user/deleteProfilePicture', userController.deleteProfilePhoto)

router.get('/user/editProfile', userController.readProfile ,pageController.renderProfileEdit)

router.patch('/user/editProfile', userController.updateProfile)

router.get('/user/changePassword', pageController.renderChangePassword)

router.post('/user/changePassword', userController.updatePassword, mailController.changePassword)

router.get('/user/myPosts', postController.readUserPosts, pageController.renderUserPosts)

//Search

router.get('/search', postController.readAllPosts, searchController.searchPosts, pageController.renderSearchResults)

//Post

router.get('/posts', postController.readAllPosts, pageController.renderAllPosts)

router.get('/post/:postId', postController.readPost, postController.readAllComments, pageController.renderPost)

router.get('/post/:postId/editPost', postController.readPost, pageController.renderPostEdit)

router.patch('/post/:postId/editPost', postController.updatePost)

router.delete('/post/:postId', postController.deletePost)

router.get('/posts/createNewPost', postController.createPost)

router.get('/post/:postId/photo', postController.readPostPhoto)

router.post('/post/:postId/uploadPhoto', postController.uploadPostPhoto)

router.delete('/post/:postId/deletePicture', postController.deletePostPhoto)

//Comment

router.get('/post/:postId/comment/writeComment', pageController.renderCommentCreate)

router.post('/post/:postId/comment/writeComment', postController.createComment)

router.get('/post/:postId/comment/:commentId', postController.readComment, pageController.renderComment)

router.patch('/post/:postId/comment/:commentId/editComment', postController.updateComment)

router.delete('/post/:postId/comment/:commentId/deleteComment', postController.deleteComment)

//Like

router.post('/post/:postId/like', postController.changeLikeStatus)

module.exports = router