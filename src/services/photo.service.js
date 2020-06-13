const path = require('path')
const fs = require('fs')

exports.uploadUserPhoto = (req, cb) => {
    var file = req.files.profilePicture

    if(!file){
        return cb(null, path.join(__dirname, '../uploads/user/default.jpg'))
    } 
    else {
        if(file.mimetype == 'image/jpeg'){
            let uploadpath = path.join(__dirname, '../../uploads/user/')
            let filename = uploadpath + req.user._id + '.' + file.name.split('.')[1]

            file.mv(filename, function (err) {
                if (err) return cb(err)
                return cb(null, filename)
            })
        } else return cb(new Error('wrong_mimetype'))  
    }
}

//exports.uploadPostPhoto

exports.updatePhoto = (photo, cb) => {

    //return path

}

exports.deletePhoto = (path, cb) => {

}

exports.readPhoto = (path, cb) => {

    //return photo
    
}

exports.setDefaultProfilePicture = (cb) => {

    //return path
}

function extention(file){

}