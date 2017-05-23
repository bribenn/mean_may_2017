//import controllers
var Friends = require('../controllers/friends.js')

 // and define routes
module.exports = function(app){
	app.get('/friends', Friends.index)
	app.post('/friends/new', Friends.create)
	app.get('/friends/:id', Friends.show)
	app.put('/friends/:id', Friends.update)
	app.delete('/friends/:id', Friends.destroy)
}