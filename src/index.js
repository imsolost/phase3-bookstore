const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./server/routes')
const app = express()

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))

app.use('/', routes)

const port = process.env.PORT || 3000
app.listen( port, () => console.log(`http://localhost:${port}`) )
