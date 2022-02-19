const { default: mongoose } = require('mongoose');

//Define person schema
const Pet = new mongoose.Schema({
    name:{
        type: String, 
        required: true
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId.name,
        ref:'Person'
    }
}, {collection: 'pet'});

module.exports = mongoose.model('Pet', Pet);