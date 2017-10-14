const express = require('express');
const app    = express();
const bodyParser = require('body-Parser')

const petController = require('./controllers/pets')



app.set('view engine', 'ejs'); 
app.set('views', __dirname + '/views');



app.use(bodyParser.urlencoded({extended: false}));





app.use('/pets', petController);




app.listen(3000, () =>{
	console.log('pets-app is listening on port 3000')
})