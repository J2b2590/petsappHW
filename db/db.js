const mongoose = require('mongoose');

const connectionString = 'mongod://localhost/pets'

mongoose.connect(connectionString);



mongoose.connection.on('connected', ()=>{

	console.log('mongoose connection to ' + connectionString)
})


mongoose.connection.on('error', ()=>{

	console.log('error ' + connectionString)
})


mongoose.connection.on('DISconnected', ()=>{

	console.log('DISconnected ' + connectionString)
})