const express = require('express');
const router = express.Router();
const Pet = require('../models/Pet');

//fetch all documents in collection
router.get('/', (req, res)=>{
    res.send('We are on home');
});

router.post('/', async (req, res)=>{
    const pet = new Pet({
        name: req.body.name,
        owner: req.body.owner
    })

    try{
        const savedPet = await pet.save()
        res.json(savedPet)
    }catch(err){
        res.json({message: err})
    }
   
});

module.exports = router;