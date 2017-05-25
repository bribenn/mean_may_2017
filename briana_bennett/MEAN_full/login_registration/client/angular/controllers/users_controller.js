app.controller('UsersController', function(UserFactory, $cookies, $location){
	console.log('initializing UsersController')
	var self = this
	self.registration_errors = []
	self.login_errors = []

	self.session = function(){
		var state = UserFactory.session()
		console.log(state)
		if(!state){
			$location.url('/')
		}
	}
	
	self.login = function(loginUser){
		self.login_errors = []
		UserFactory.login(loginUser, function(response){
			if(response.data.errors){
				for(key in response.data.errors){
					var error = response.data.errors[key]
					self.login_errors.push(error.message)
				}
			}
			else {
				$cookies.put('user_id', response.data._id)
				$location.url('/dashboard')
			}
		})
	}

	self.logout = function(){
		$cookies.remove('user_id')
		$location.url('/')
	}

	self.create = function(newUser){
		self.registration_errors = []
		console.log(newUser)
		UserFactory.create(newUser, function(response){
			console.log(response)
			if(response.data.errors){
				for(key in response.data.errors){
					var error = response.data.errors[key]
					self.registration_errors.push(error.message)
				}
			}
			else {
				var user_id = response.data._id
				$cookies.put('user_id', user_id)
				$location.url('/dashboard')
			}

		})
	}

	// end of app.controller
})