const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({

	name: String,
	breed: String,
	age: Number,
	hairtype: String

})

module.exports = mongoose.model('Pet', PetSchema)


