var pageController = require('../controllers/page.controller')

module.exports = (app) => {

    app.use((req, res, next) => {
        next()
    }, pageController.render404)

    app.use((error, req, res, next) => {
        res.send({
            error: {
                status: error.status,
                message: error.message
            }
        })
    })
}