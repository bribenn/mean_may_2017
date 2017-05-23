app.controller('FriendsController', function(FriendFactory, $routeParams, $location){
	console.log('initializing friends controller')
	
	var self = this
	self.friends = []
	self.errors = []

	self.index = function(){
		FriendFactory.index(function(response){
			console.log(response)
			//because the response is a large object and data is the key where we have our friend
			self.friends = response.data
		})
	}
	self.create = function(newFriend){
		self.errors = []
		console.log(newFriend)
		FriendFactory.create(newFriend, function(response){
			self.newFriend = {}
			if(response.data.errors){
				for(key in response.data.errors){
					var error = response.data.errors[key]
					self.errors.push(error.message)
				}
			} else {
				self.index()
				$location.url('/')
			}
		})
	}
	self.update = function(updatedFriend) {
	    console.log(updatedFriend);
	    FriendFactory.update($routeParams.id, updatedFriend, function(response) {
	    	self.updatedFriend = {}
	      	self.friend = response.data
	      	$location.url('/')
	    })
  	}
  	self.show = function(){
  		FriendFactory.show($routeParams.id, function(response){
  			console.log(response)
  			self.friend = response.data
  		})
  	}
  	self.destroy = function(friend){
  		console.log(friend._id)
  		FriendFactory.destroy(friend._id, self.index)
  	}
  	


	// end of app.controller function
})