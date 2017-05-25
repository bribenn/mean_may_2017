var mongoose = require('mongoose')
var User = mongoose.model('User')

module.exports = {
	index: function(request, response){
		User.find({}, function(err, users){
			if(err){
				return response.json(err)
			}
			return response.json(users)
		})
	},
	create: function(request, response){
		User.create(request.body, function(err, users){
			if(err){
				return response.json(err)
			}
			return response.json(users)
		})
	},
	login: function(request, response){
		//look up the email
		User.findOne({email: request.body.email}, function(err, user){
			if(err){
				return response.json(err)
			}
			//check for null and authenticate password
			if(user && user.authenticate(request.body.password)){
				return response.json(user)
			}
			return res.json({
				'errors': {
					'password': {
						'message': 'invalid credentials'
					}
				}
			})
		})
	}

	// end of module.exports
}