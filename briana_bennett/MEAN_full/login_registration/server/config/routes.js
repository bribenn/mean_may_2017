var Users = require('../controllers/users')

module.exports = function(app){
	app.get('/users', Users.index)
	app.post('/users', Users.create)
	app.post('/sessions', Users.login)
	// app.get('/users/:id', Users.show)
	// app.put('/users/:id', Users.update)
	// app.delete('/users/:id', Users.destroy)
}