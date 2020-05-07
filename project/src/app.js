const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

const CONNSTR = require('./config/db.connection')
const PORT = require('./config/server.port')

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

require('./routes/register.router')(app)
require('./middlewares/errorhandler.mw')(app)

mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)
mongoose.set('useUnifiedTopology', true)

mongoose.connect(CONNSTR)
    .then(() => {
        console.log('Succesfully connected to DB...')
        
    }).catch((err) => {
        console.log(err)
    })

app.listen(PORT, () => {
    console.log(`Listening on port -> ${PORT}`)
})