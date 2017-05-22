app.controller('PlayersController', function(PlayerFactory, $routeParams, $location){
	console.log('initializing players controller')
	var self = this
	self.players = []
	self.getPlayers = function(){
		PlayerFactory.getPlayers(function(data){
			self.players = data
		})
	}
	self.addPlayer = function(newPlayer){
		console.log(newPlayer)
		PlayerFactory.createPlayer(newPlayer, function(){
			self.getPlayers()
			self.newPlayer = {}
		})
	}
	self.destroyPlayer = function(player){
		PlayerFactory.destroyPlayer(player, function(){
			self.getPlayers()
		})
	}
	self.destroyPlayer
})