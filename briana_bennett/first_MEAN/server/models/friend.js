var mongoose = require('mongoose')

var FriendSchema = new mongoose.Schema({
	first_name: {
		type: String,
		required: [true, 'name field cannot be blank'] ,
		maxlength: [120, 'name cannot exceed 120 characters'],
	},
	last_name: {
		type: String,
		required: [true, 'name field cannot be blank'] ,
		maxlength: [120, 'name cannot exceed 120 characters'],
	},
	birthday: {
		type: Date,
		required: [true, 'must enter your birthday'],
	}
}, {timestamps: true})

mongoose.model('Friend', FriendSchema)