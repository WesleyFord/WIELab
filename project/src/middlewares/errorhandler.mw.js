module.exports = (app) => {
     app.use('*', (err, req, res, next) => {

        if(!req.body){
            if(!req.body) res.status(500).send({message: 'An error occured. Please try again.'})
        }
         
        if(err){
            if(err.code == 11000){
                res.status(500).send({message: 'username_is_already_in_use'})
            }
        }
     })
}