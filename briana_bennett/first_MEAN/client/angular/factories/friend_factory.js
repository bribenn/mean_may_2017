app.factory('FriendFactory', function($http){
	var factory = {}

	factory.index = function(callback){
		$http.get('/friends').then(callback)
	}
	factory.show = function(id, callback) {
      $http.get('/friends/' + id).then(callback)
	}
	factory.create = function(newFriend, callback){
		$http.post('/friends/new', newFriend).then(callback)
	}

	factory.update = function(id, updatedFriend, callback) {
		$http.put('/friends/' + id, updatedFriend).then(callback)
	}

	factory.destroy = function(id, callback) {
	  	$http.delete('/friends/' + id).then(callback)
	}

	return factory;
});
