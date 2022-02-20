const express = require('express');
const router = express.Router();
const Person = require('../models/Person');

// search on pet id OR pet's person id
// isPerson will be a flag to determine endpoint search

//Post a person
router.post('/', async (req, res)=>{
    // const err = Person.joiValidate(req.body)
    // if (err) throw err;

    const person = new Person({
        name: req.body.name,
        lastname: req.body.lastname,
    })

    try{
        const savedPerson = await person.save()
        res.json(savedPerson)
    }catch(err){
        res.json({message: err})
    }
});

//Get a person
router.get('/:id', async (req, res) => {
    const searchPerson= await Person.findById(req.params.id)
    res.json(searchPerson)
})

//Patch properties in a person
router.patch('/:id', async(req, res) => {
    try{
        const updatePerson = await Person.updateOne(
            { _id:req.params.id }, 
            { 
                $set: 
                { 
                    name: req.body.name,
                    lastname: req.body.lastname,
                } 
            }
        )
        res.json(updatePerson)
    }catch (err){
        res.json(err)
    }
})

//Find a friend
router.get('/:id/isFriend/:isFriend',async (req, res)=>{
    try{
        if (req.params.isFriend == 0) {
            // search based on person id
            const searchPerson = await Person.findById(req.params.id).exec();
            res.json(searchPerson)
        } else {
            // search based on friend id
            const searchThroughFriend = await Person.findOne({ friend: req.params.id }).exec();
            res.json(searchThroughFriend._id)
        }
    }catch(err){
        res.json({message: err})
    }
})

//Assign friend
router.patch('/assignFriend/:id', async(req, res) => {
    try{
        const assignFriend = await Person.updateOne(
            { _id:req.params.id }, 
            { 
                $push: 
                { 
                    friend: req.body.friend
                } 
            }
        )
        res.json(assignFriend)
    }catch (err){
        res.json(err)
    }
})

//Unassign friend
router.patch('/unassignFriend/:id', async(req, res) => {
    try{
        const unassignFriend = await Person.updateOne(
            { _id:req.params.id }, 
            { 
                $pull: 
                { 
                    friend: req.body.friend
                } 
            }
        )
        res.json(unassignFriend)
    }catch (err){
        res.json(err)
    }
})


//Assign pet
router.patch('/assignPet/:id', async(req, res) => {
    try{
        const assignPet = await Person.updateOne(
            { _id:req.params.id }, 
            { 
                $set: 
                { 
                    friend: req.body.person
                } 
            }
        )
        res.json(assignPet)
    }catch (err){
        res.json(err)
    }
})

//Unassign pet
router.patch('/unassignPet/:id', async(req, res) => {
    try{
        const unassignPet = await Person.updateOne(
            { _id:req.params.id }, 
            { 
                $pull: 
                { 
                    pet: req.body.pet
                } 
            }
        )
        res.json(unassignPet)
    }catch (err){
        res.json(err)
    }
})

//Delete person
router.delete('/:id', async (req, res) => {
    try{
        const removePerson = await Person.remove({ _id: req.params.id })
        res.json(removePerson)
    }catch (err){
        res.json({message: err})
    }
    
})

module.exports = router;