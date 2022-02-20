const express = require('express');
const router = express.Router();
const Pet = require('../models/Pet');
const Person = require('../models/Person');

// search on pet id OR pet's person id
// isPerson will be a flag to determine endpoint search
router.get('/:id/isPerson/:isPerson',async (req, res)=>{
    try{
        if (req.params.isPerson == 0) {
            // search based on pet
            const searchPet = await Pet.findById(req.params.id).exec();
            res.send(searchPet)
        } else {
            // search based on person
            const searchPerson = await Person.findById(req.params.id).exec();

            let promiseList = await searchPerson.pet.map(async (item,i)=> 
                Pet.findById(item).exec() 
            );

            // console.log("promiseList", promiseList)

            Promise.all(promiseList).then((petList)=> {
                res.json(petList)
            });
        }
    }catch(err){
        res.json({message: err})
    }
})

// create a single pet
router.post('/', async (req, res)=>{
    const pet = new Pet({
        name: req.body.name,
        owner: req.body.owner
    })

    try{
        const savedPet = await pet.save()
        //const petID = await pet._id;
        res.json(savedPet)
    }catch(err){
        res.json({message: err})
    }
   
});

// /pet/edit/:id
// edit pet properties
router.patch('/:id', async(req, res) => {
    try{
        const updatePet = await Pet.updateOne(
            { _id:req.params.id }, 
            { $set: { name: req.body.name } }
        )
        res.json(updatePet)
    }catch (err){
        res.json(err)
    }
})


router.delete('/:id', async (req, res) => {
    try{
        const removePet = await Pet.remove({ _id: req.params.id })
        res.json(removePet)
    }catch (err){
        res.json({message: err})
    }
    
})

module.exports = router;