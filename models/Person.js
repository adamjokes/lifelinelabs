const { default: mongoose } = require('mongoose');
const Joi = require('joi')

//Define person schema
const Person = new mongoose.Schema({
    name:{
        type: String
    },
    lastname:{
        type: String
    },
    friend:[{
        type: mongoose.Schema.Types.ObjectId, 
        ref:'Person'
    }],
    pet:[{
        type: mongoose.Schema.Types.ObjectId, 
        ref:'Pet'
    }]

}, {collection: 'person'});

Person.methods.joiValidate = function(obj) {
    const schema ={
        name: Joi.types.String().required(),
        lastname: Joi.types.String().required(),
        friend: Joi.types.array().items(Joi.string()),
        pet: Joi.types.array().items(Joi.string())
    }

    return Joi.validate(obj, schema)
}

module.exports = mongoose.model('Person', Person);



