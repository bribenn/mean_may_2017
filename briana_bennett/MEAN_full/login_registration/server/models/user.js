var mongoose = require('mongoose')
var bcrypt = require('bcryptjs')

var UserSchema = new mongoose.Schema({
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
	email: {
		type: String,
		validate: {
			validator: function(email){
				return /\S*\@\S*\.\S+/g.test(email)
			},
			message: "email must be in 'something@something.com' format"
		},
		unique: [true, 'email already in use'],
		required: [true, 'Email cannot be blank ']
	},
	birthday: {
		type: Date,
		required: [true, 'must enter your birthday'],
	},
	password: {
		type: String,
		required: [true, 'password cannot be blank']
	},
	password_confirm: {
		type: String,
		required: [true, 'please confirm your password']
	},
}, {timestamps: true})

UserSchema.methods.hashPassword = function(password){
	this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}
UserSchema.methods.authenticate = function(password){
	return bcrypt.compareSync(password, this.password)
}

UserSchema.pre('save', function(callback){
	this.hashPassword(this.password)
	callback()
})

mongoose.model('User', UserSchema)












