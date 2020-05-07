const User = require('../models/user.model')

exports.saveUserIntoDB = (req, res, next) => {

    var user = new User(req.userInfo)

    //user.userId = user._id

    user.save((err, usr) => {
        
        if(err){
            return next(err)
        }
        res.send({message: 'user_registered'})
    })
}