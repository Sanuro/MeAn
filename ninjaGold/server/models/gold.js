const mongoose = require('mongoose')

var goldSchema = new mongoose.Schema({

    gold: {type: Number, default: 0},
    advLog: {type: String, default: ""}

},{timestamps:true});



mongoose.model('Gold', goldSchema);