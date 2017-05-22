app.controller('AssociationsController', function(TeamFactory, PlayerFactory, $routeParams, $location){
	console.log('initializing associations controller')
	var self = this
	self.players = []
	self.teams = []
	// get players, display player.team only if player.team != null
	self.playersIndex = function(){
		PlayerFactory.getPlayers(function(players){
			self.players = players
		})
	}

	self.teamsIndex = function(){
		TeamFactory.getTeams(function(teams){
			self.teams = teams
		})
	} 
	
	self.addAssociation = function(newAssociation){
		console.log(newAssociation)
		PlayerFactory.addAssociation(newAssociation, function(){
			self.newAssociation = {}
			self.playersIndex()
		})
	}

// 	self.destroyAssociations = 
// 	// set player.team to null. 

})