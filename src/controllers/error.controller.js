var pageController = require('../controllers/page.controller')

/* module.exports = (error, req, res, next) => {
    if(error.status == 404){
        //render 404 page

        return pageController.render404(req,res,next)
    } else {

        return res.status(error.status || 500)
        .send({
            error: {
                status: error.status || 500,
                message: error.message || 'internal_server_error'
            }
        })
    }
} */

module.exports = (app) => {

    app.use((req, res, next) => {
        next()
    }, pageController.render404)

    app.use((error, req, res, next) => {
        res.send('error')
    })
}