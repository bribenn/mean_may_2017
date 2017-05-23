var mongoose = require('mongoose')
var Friend = mongoose.model('Friend')

module.exports = {
	index: function(request, response){
		Friend.find({}).exec(function(err, friends){
			if(err){
				return response.json(err)
			}
			return response.json(friends)
		})
	}, 
	create: function(request, response){
		Friend.create(request.body, function(err, friend){
			if(err){
				return response.json(err)
			}
			return response.json(friend)
		})
	},
	show: function(request, response){
		Friend.findById(request.params.id, function(err, friend){
			if(err){
				return response.json(err)
			}
			if(!friend){
				return response.json({
					'errors': "404 - friend not found"
				})
			}
			return response.json(friend)
		})
	},
	update: function(request, response){
		Friend.findByIdAndUpdate(request.params.id, {$set: request.body}, {new: true}, function(err, friend){
			if(err){
				return response.json(err)
			}
			if(!friend){
				return response.json({
					'errors':'404 - friend not found'
				})
			}
			return response.json(friend)
		})
	},
	destroy: function(request, response){
		Friend.findByIdAndRemove(request.params.id, function(err, friend){
			if(err){
				return response.json(err)
			}
			return response.json(friend)
		})
	}
}