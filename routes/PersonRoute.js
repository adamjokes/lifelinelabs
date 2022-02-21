const express = require('express');
const router = express.Router();
const Person = require('../models/Person');

//GET to fetch person data using ID or person data using friend ID
//isFriend will be a flag to determine endpoint search
router.get('/:id/isFriend/:isFriend',async (req, res)=>{
    try{
        if (req.params.isFriend == 0) {
            // search based on person id
            
            const searchPerson = await Person.findById(req.params.id).exec();
            var err = await 
            res.json(searchPerson)
        } else {
            // search based on friend id
            const searchThroughFriend = await Person.findOne({ friend: req.params.id }).exec();
            res.json(searchThroughFriend)
        }
    }catch(err){
        res.json({message: err})
    }
})


//POST to add a person
router.post('/addPerson', async (req, res)=>{
    // const err = Person.joiValidate(req.body)
    // if (err) throw err;

    const person = new Person({
        name: req.body.name,
        lastname: req.body.lastname,
    })

    try{
        const savedPerson = await person.save()
        res.send(savedPerson)
    }catch(err){
        res.json({message: err})
    }
});



//PATCH to edit person properties
router.patch('/:id', async(req, res) => {
    try{
        await Person.updateOne(
            { _id:req.params.id }, 
            { 
                $set: 
                { 
                    name: req.body.name,
                    lastname: req.body.lastname,
                } 
            }
        )
        res.json(req.body)
    }catch (err){
        res.json(err)
    }
})

//PATCH to assign friend
router.patch('/assignFriend/:id', async(req, res) => {
    try{
        await Person.updateOne(
            { _id:req.params.id }, 
            { 
                $push: 
                { 
                    friend: req.body.friend
                } 
            }
        )
        const searchUpdatedPerson = await Person.findById(req.params.id);
        res.json(searchUpdatedPerson)
    }catch (err){
        res.json(err)
    }
})

//PATCH to unassign friend
router.patch('/unassignFriend/:id', async(req, res) => {
    try{
        await Person.updateOne(
            { _id:req.params.id }, 
            { 
                $pull: 
                { 
                    friend: req.body.friend
                } 
            }
        )
        const searchUpdatedPerson = await Person.findById(req.params.id);
        res.json(searchUpdatedPerson)
    }catch (err){
        res.json(err)
    }
})


//PATCH to assign pet
router.patch('/assignPet/:id', async(req, res) => {
    try{
        await Person.updateOne(
            { _id:req.params.id }, 
            { 
                $set: 
                { 
                    pet: req.body.pet
                } 
            }
        )
        const searchUpdatedPerson = await Person.findById(req.params.id);
        res.json(searchUpdatedPerson)
    }catch (err){
        res.json(err)
    }
})

//PATCH to unassign pet
router.patch('/unassignPet/:id', async(req, res) => {
    try{
        await Person.updateOne(
            { _id:req.params.id }, 
            { 
                $pull: 
                { 
                    pet: req.body.pet
                } 
            }
        )
        const searchUpdatedPerson = await Person.findById(req.params.id);
        res.json(searchUpdatedPerson)
    }catch (err){
        res.json(err)
    }
})

//DELETE a person
router.delete('/:id', async (req, res) => {
    try{
        const removePerson = await Person.deleteOne({ _id: req.params.id })
        res.json(removePerson)
    }catch (err){
        res.json({message: err})
    }
    
})

module.exports = router;