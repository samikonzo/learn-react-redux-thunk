let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let path = require('path')
let routes = require('./routes/routes.js')


global.l = console.log

app.use((req, res, next) =>{
	l(req.method, req.url)
	next()
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/', routes)


app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../', 'public/index.html'))
})

app.listen(3000)