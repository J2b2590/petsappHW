require('./db/db')

const express = require('express');
const app    = express();
const bodyParser = require('body-parser')
const methodOverride = require('method-override')



const petController = require('./controllers/pets')



app.set('view engine', 'ejs'); 
app.set('views', __dirname + '/views');


app.use(methodOverride('_method'));

app.use(bodyParser.urlencoded({extended: false}));





app.use('/pets', petController);




app.listen(3000, () =>{
	console.log('pets-app is listening on port 3000')
})