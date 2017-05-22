var app = angular.module('app', ['ngRoute'])
//ROUTES
app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/customizeUsers.html'
	})
	.when('/userList', {
		templateUrl: 'partials/userList.html'
	})
	.otherwise ({
		redirectTo: '/'
	})
})
//FACTORY
app.factory('UserFactory', function(){
	//get factory, create users
	var users = [{first_name: 'briana', last_name: 'bennett', favorite_language:'python'}]
	var factory = {}
	factory.getUsers = function(callback){
		callback(users)
	}
	factory.createUser = function(newUser, callback){
		users.push(newUser)
		callback()
	}
	factory.deleteUser = function(user, callback){
		var i = users.indexOf(user)
		users.splice(i, 1)
		callback()
	}

	//User factory
	return factory
})

//CONTROLLERS
app.controller('CustomizeUsersController', ['$scope', 'UserFactory', '$location', function($scope, UserFactory, $location){
	console.log('initializing shit')
	$scope.users = []
	$scope.getUsers = function(){
		UserFactory.getUsers(function(data){
			$scope.users = data
		})
	}
	$scope.createUser = function(newUser){
		UserFactory.createUser(newUser, function(){
			$scope.getUsers()
			$scope.newUser = {}
			$location.url('/userList')
		})
	}
	$scope.deleteUser = function(user){
		UserFactory.deleteUser(user, function(){
			$scope.getUsers()
		})
	}
}])

app.controller('UserListsController', ['$scope', 'UserFactory', function($scope, UserFactory){
	$scope.users = []
	console.log('initializing UserListsController')
	$scope.getUsers = function(){
		UserFactory.getUsers(function(data){
			$scope.users = data
		})
	}

}])