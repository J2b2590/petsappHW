const express = require('express');
const router  = express.Router();
const pet    = require('../models/pets')


router.get('/', (req, res)=>{


	res.render('index',{

				pet: pet

	})
})







module.exports = router;