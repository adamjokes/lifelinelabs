const express = require('express');
const router = express.Router();
const Person = require('../models/Person');

//fetch all documents in collection
router.get('/', (req, res)=>{
    res.send('We are on home');
});

router.post('/', async (req, res)=>{
    const person = new Person({
        name: req.body.name,
        lastname: req.body.lastname,
        friend: req.body.friend,
        pet: req.body.pet
    })

    try{
        const savedPerson = await person.save()
        res.json(savedPerson)
    }catch(err){
        res.json({message: err})
    }
});

module.exports = router;