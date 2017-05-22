app.controller('TeamsController', function(TeamFactory, $routeParams, $location){
	console.log('initializing teams controller')
	var self = this
	self.teams = []
	self.getTeams = function(){
		TeamFactory.getTeams(function(data){
			self.teams = data
		})
	}
	self.addTeam = function(newTeam){
		console.log(newTeam)
		TeamFactory.createTeam(newTeam, function(){
			self.getTeams()
			self.newTeam = {}
		})
	}
	self.destroyTeam = function(team){
		TeamFactory.destroyTeam(team, function(){
			self.getTeams()
		})
	}
})