const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({

	name: String,
	breed: String,
	age: Number,
	longHair: Boolean

})

module.exports = mongoose.model('Pets', PetSchema)


