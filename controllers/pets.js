const express = require('express');
const router  = express.Router();
const pet    = require('../models/pets')


router.get('/', (req, res)=>{
		
		pet.find((err,pets)=>{
			if(err)
				res.send('error')
			res.render('index', {pet: pets})
		})
	
})


router.get('/new', (req, res)=>{
		
			
		res.render('new', {})

		console.log( 'this is the new page')
	
})

router.get('/edit', (req, res)=>{
		
			
		res.render('new', {})

		console.log( 'this is the edit page')
	
})





module.exports = router;