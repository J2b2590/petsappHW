const express = require('express');
const router  = express.Router();
const pet    = require('../models/pets')


router.get('/', (req, res)=>{
		

		
		
		pet.find((err,pets)=>{

			if(err){
				res.send('error in the db')
			} else {
				console.log(pets)
				res.render('index', {pet: pets})
		    }
		})
	})






router.get('/new', (req, res)=>{
		
			
		res.render('new', {})

		console.log( 'this is the new page')
	
})

router.get('/:index', (req, res)=>{
		pet.find((err, pets)=>{



	if(err){
		res.send('error in the db with the index route');
	}else{
	res.render('show', {pet: pets[req.params.index]})
		}
	})
})

router.get('/:index/edit', (req, res) => {

	//console.log(req.body)

	pet.find( (err, pets)=>{


	if(err){
		res.send('error with the get route');
	}else{
	res.render('edit', {pet: pets[req.params.index], index: req.params.index})
	}
  })
})



router.post('/create', (req, res) =>{
		
		pet.create(req.body, (err, pets)=>{

		if(err) {
			res.send('error creating pet')
		} else{
			res.redirect('/pets')
		}
	})
})







router.put('/:index/edit', (req, res) => {
	console.log(req.params.index)

	pet.findOneAndUpdate(req.params.index, req.body, (err,pet)=>{

		if(err){
			res.send('error');
		}else{
		res.redirect('/pets');
		}
	})
})

// router.get('/:name', (req, res)=>{
// 	res.send(req.params.name)
// })



router.delete('/:index', (req, res) => {

	pet.findByIdAndRemove(req.params.index, (err, pets)=>{
		if(err){
			res.send('im an error')
		} else{
			res.redirect('/pets')
		}
	})
})




module.exports = router;