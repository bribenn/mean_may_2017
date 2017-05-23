var express = require('express'),
	bp = require('body-parser'),
	path = require('path'),
	app = express()

app.use(express.static(path.join(__dirname, 'client')))
app.use(express.static(path.join(__dirname, 'bower_components')))
app.use(bp.json())


//connect to mongoose
require('./server/config/mongoose')
require('./server/config/routes')(app)

app.listen(8000, function(){
	console.log('server running on port 8000')
})