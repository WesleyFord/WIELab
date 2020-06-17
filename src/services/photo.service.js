const path = require('path')
const fs = require('fs')
const ErrorHandler = require('../helpers/error.handler')

exports.uploadUserPhoto = (req, cb) => {

    if(!req.files ||!req.files.profilePicture){
        return cb(new ErrorHandler(400, 'no_files_uploaded'))
    } 
    else {
        var file = req.files.profilePicture

        if(file.mimetype == 'image/jpeg'){
            let uploadpath = path.join(__dirname, '../../uploads/user/')
            let filename = req.user._id + '.' + file.name.split('.')[1]
            let filepath = uploadpath + filename

            file.mv(filepath, function (err) {
                if (err) return cb(new ErrorHandler(500, 'server_error'))
                return cb(null, filename)
            })
        } else return cb(new ErrorHandler(403, 'wrong_mimetype'))  
    }
}

exports.uploadPostPhoto = (req, cb) => {

    if(!req.files || !req.files.picture){
        return cb(new ErrorHandler(400, 'no_files_uploaded'))
    }
    else{
        var file = req.files.picture

        if(file.mimetype == 'image/jpeg'){
            let uploadpath = path.join(__dirname, '../../uploads/post/')
            let filename = req.params.postId + '.' + file.name.split('.')[1]
            let filepath = uploadpath + filename

            file.mv(filepath, function(err) {
                if(err) return cb(new ErrorHandler(500, 'server_error'))
                return cb(null, filename)
            })
        } else return cb(new ErrorHandler(403, 'wrong_mimetype'))
    }
}

exports.deletePhoto = (path, cb) => {

    fs.unlink(path, (err) => {
        if (err) return cb(new ErrorHandler(500, 'server_error'))

        else return cb(null, true)
    })

}

exports.defaultProfilePicture = path.join(__dirname, '../../uploads/user/default.jpg')
