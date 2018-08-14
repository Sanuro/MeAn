const mongoose = require('mongoose')

var taskSchema = new mongoose.Schema({
    title: {type:String, required:true},
    completed:{type:Boolean, default:false},
    description:{type:String, default: ""},
},{timestamps:true});

var restfulInteractiveSchema = new mongoose.Schema({
    heading: {type:String, required:true},
    completed:{type:Boolean, default:false},
    description:{type:String, default: ""},
},{timestamps:true});

mongoose.model('Task', taskSchema, restfulInteractiveSchema);