var app = angular.module('app', ['ngRoute'])

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/friends_index.html',
		controller: 'FriendsController as FC'
	})
	.when('/friends/new', {
		templateUrl: 'partials/friends_create.html',
		controller: 'FriendsController as FC'
	})
	.when('/show/:id', {
		templateUrl: 'partials/friend_show.html',
		controller: 'FriendsController as FC'
	})
	.when('/update/:id', {
		templateUrl: 'partials/friend_update.html',
		controller: 'FriendsController as FC'
	})
	.otherwise({ redirectTo: '/'})
})