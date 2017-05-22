app.factory('TeamFactory', function(){
	var teams = [
	{name: 'bulldogs'}
	]
	var factory = {}
	factory.getTeams = function(callback){
		callback(teams)
	}
	factory.createTeam = function(newTeam, callback){
		teams.push(newTeam)
		callback()
	}
	factory.destroyTeam = function(team, callback){
		var i = teams.indexOf(team)
		teams.splice(i,1)
		callback()
	}

	return factory
})