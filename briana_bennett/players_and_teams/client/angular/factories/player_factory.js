app.factory('PlayerFactory', function(){
	var players = [
	{name:'briana', team: null}
	]
	var factory = {}
	factory.getPlayers = function(callback){
		callback(players)
	}
	factory.createPlayer = function(newPlayer, callback){
		players.push(newPlayer)
		callback()
	}
	factory.destroyPlayer = function(player, callback){
		var i = players.indexOf(player)
		players.splice(i,1)
		callback()
	}
	factory.addAssociation = function(newAssociation, callback){
		for(var i = 0; i<players.length; i++){
			if(players[i].name == newAssociation.player){
				players[i].team = newAssociation.team
			} 
		} 
		callback()
	} 
	return factory
})