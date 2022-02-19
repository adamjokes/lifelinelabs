const { default: mongoose } = require('mongoose');

//Define person schema
const Person = new mongoose.Schema({
    name:{
        type: String, 
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    friend:{
        type: String
    },
    pet:[{
        type: mongoose.Schema.Types.ObjectId, 
        ref:'Pet'
    }],
    friend:[{
        type: mongoose.Schema.Types.ObjectId.name, 
        ref: 'Pet'
    }]

}, {collection: 'person'});

module.exports = mongoose.model('Person', Person);



