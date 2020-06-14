const path = require('path')
const fs = require('fs')

exports.uploadUserPhoto = (req, cb) => {

    if(!req.files.profilePicture){
        return cb(new Error({message: 'no_files_uploaded'}))
    } 
    else {
        var file = req.files.profilePicture

        if(file.mimetype == 'image/jpeg'){
            let uploadpath = path.join(__dirname, '../../uploads/user/')
            let filepath = uploadpath + req.user._id + '.' + file.name.split('.')[1]

            file.mv(filepath, function (err) {
                if (err) return cb(err)
                return cb(null, filepath)
            })
        } else return cb(new Error({message: 'wrong_mimetype'}))  
    }
}

exports.uploadPostPhoto = (req, cb) => {

    if(!req.files.picture){
        return cb(new Error({message: 'no_files_uploaded'}))
    }
    else{
        var file = req.files.picture

        if(file.mimetype == 'image/jpeg'){
            let uploadpath = path.join(__dirname, '../../uploads/post/')
            let filepath = uploadpath + req.params.postId + '.' + file.name.split('.')[1]

            file.mv(filepath, function(err) {
                if(err) return cb(err)
                return cb(null, filepath)
            })
        } else return cb(new Error({message: 'wrong_mimetype'}))
    }
}

exports.deletePhoto = (path, cb) => {

    fs.unlink(path, (err) => {
        if (err) return cb(err)

        else return cb(null, true)
    })

}

exports.defaultProfilePicture = path.join(__dirname, '../../uploads/user/default.jpg')
