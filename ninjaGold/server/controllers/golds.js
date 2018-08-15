var mongoose = require('mongoose');
require("../models/gold.js");
var Gold = mongoose.model('Gold');

module.exports = {
    getGold: function(req, res){
        console.log("inside getGold");
        Gold.find({}, function(err, data) {
            if(err){
                console.log("err finding gold", err);
            }else{
                console.log("gottim dat gold");
                console.log("in golds.js");
                res.json({gold: data});
            }

        })
    },

    createGold: function(req, res){
        console.log("inside createGold");
        Gold.remove({}, function(err){
            if(err){
                res.json({message: "error", errors: err});
            }else{
                Gold.create({}, function(err){
                    if(err){
                        res.json({message: "error", errors:err});

                    }else{
                        res.json({message: "success"});
                    }
                })
            }
        })
    },

    update: function(req, res){
        Gold.update({}, {$set: {gold: req.body.num, advLog: req.body.log}}, function(err){
            
            if(err){
                res.json({message:"error", errors: error});
            }else{
                res.json({message: "success"});
                
            }

           
        });
    },
};