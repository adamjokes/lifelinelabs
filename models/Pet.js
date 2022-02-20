const { default: mongoose } = require('mongoose');

//Define person schema
const Pet = new mongoose.Schema({
    name:{
        type: String, 
        required: true
    }
}, {collection: 'pet'});

module.exports = mongoose.model('Pet', Pet);