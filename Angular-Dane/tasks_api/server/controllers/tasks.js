var mongoose = require('mongoose');
var Task = mongoose.model('Task');

function Tasks(){

    // this.index = function(req,res){
    //     res.json({message: "Index is here"});
    // }

    this.getAll = function(req,res){
        Task.find({}, function(err, tasks){
            if(err){
                res.json({message:"Error", errore:err});
            }else{
                res.json({message:"Success", data:tasks});
            }
        });
    }

    this.getOne = function(req,res){
        Task.findOne({_id: req.params.id}, function(err, task){
            if(err){
                res.json({message:"Error"});
            }else{
                res.json({message:"Success", data:task});
            }
        });
    }

    this.create = function(req,res){
        var task = new Task({title: req.body.title, completed: req.body.completed, description: req.body.description});
        task.save(function(err){
            if(err){
                res.json({message:"Error", error: err});
            }else{
                res.json({message:"Saved", tasks:task});
            }
        });
    }

    this.update = function(req,res){
        Task.update({_id: req.params.id}, {title:req.body.title, completed:req.body.completed, description:req.body.description}, function(err){
            if(err){
                res.json({message:"Error"});
            }else{
                res.json({message:"Updated"});
            }
        });
    }

    this.delete = function(req, res){
        Task.remove({_id: req.params.id}, function(err){
            if(err){
                res.json({message:"Error"});
            }else{
                res.json({message:"Deleted"});
            }
        });
    }
}


module.exports = new Tasks()