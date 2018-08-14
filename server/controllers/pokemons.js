const axios = require('axios');
var mongoose = require('mongoose');

require('../models/pokemon.js');
const Pokemon = mongoose.model('Pokemon');
const User = mongoose.model('User');

const bcrypt = require('bcryptjs')
var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

module.exports = {
    getAll: function(req, res) {
        console.log('loading pokemon page')
        Pokemon.find({}, function(err, pokemon) {
            if (err){
                console.log("errors finding pokemon", err)
            } else {
                console.log('successfully found pokemon')
                res.json({pokemon: pokemon})
            }
        })
    },
    remove: function(req, res) {
        console.log("in the remove function with id: ", req.params.id)
        Pokemon.remove({_id: req.params.id}, function(err, pokemon) {
            if (err){
                console.log('error removing pokemon')
            } else {
                console.log('successfully removed pokemon')
                res.json({pokemon})
            }
        })
    },
    add: function (req, res){
        console.log("INSIDE ADD FUNCTION WITH ID:", req.params.num)
        axios.get(`http://pokeapi.co/api/v2/pokemon/${req.params.num}/`)
        .then(data => {
            var pokemon_abilities = []
            var pokemon_stats = []
            for (var ability of data.data.abilities){
                pokemon_abilities.push(ability.ability.name)
            }
            console.log(pokemon_abilities)
            for (var stat of data.data.stats){
                pokemon_stats.push([stat.stat.name, stat.base_stat])
            }
            var pokemon = new Pokemon({name: data.data.forms[0].name, abilities: pokemon_abilities, stats: pokemon_stats})
            pokemon.save(function(err) {
                if(err) {
                  console.log('something went wrong');
                  res.json(err)
                } else { 
                  console.log('successfully added a pokemon!');
                //   res.redirect('/pokemon')
                res.json({status: 200})
                }
            })
        })
        .catch(error => {
            console.log(error);
            res.json(error);
        })
    },
    update: function (req, res){
        axios.get(`http://pokeapi.co/api/v2/pokemon/${req.params.num}/`)
        .then(data => {
            var pokemon_abilities = []
            var pokemon_stats = []
            for (var ability of data.data.abilities){
                pokemon_abilities.push(ability.ability.name)
            }
            console.log(pokemon_abilities)
            for (var stat of data.data.stats){
                pokemon_stats.push([stat.stat.name, stat.base_stat])
            }
            Pokemon.update({_id: req.params.id}, {$set: {name: data.data.forms[0].name, abilities: pokemon_abilities, stats: pokemon_stats}}, function(err){
                if (err){
                    console.log('could not update pokemon')
                    res.json(err)
                } else {
                    console.log('pokemon updated successfully')
                    res.json({status: 200})
                //   res.redirect('/pokemon')
                }
            })
        })
        .catch(error => {
            console.log(error);
            res.json(error);
        })
    },
    index: function(request, response) {
        response.render('index')
    },
    register: function(req,res){
        User.find({email: req.body.email}, function(err, user){
            if (err){
                console.log("error trying to find user");
                res.redirect('/');
            } else {
                if (user.length != 0){
                    req.flash('registration', "That user already exists!");
                    console.log("user already exists")
                    res.redirect('/')
                } else {
                    bcrypt.hash(req.body.password, 10)
                    .then(hashed_password => {
                        if (emailRegex.test(req.body.email)){
                        var user = new User({first_name: req.body.first_name, last_name: req.body.last_name, email: req.body.email, password: hashed_password})
                        console.log(user)
                        user.save(function(save_err){
                            if (save_err){
                                console.log('something went wrong', save_err)
                                for (var key in save_err.errors){
                                    req.flash('registration', save_err.errors[key].message);
                                }
                                res.redirect('/');
                            } else {
                                res.redirect('/pokemon');
                            }
                        })
                        } else {
                            req.flash('registration', "that is not a valid email")
                            res.redirect('/')
                        }
                    })
                    .catch(error => {
                        console.log("error", error)
                        res.redirect('/')
                    })
                }
            }
        })
    },
    login: function(req, res){
        User.find({email: req.body.email}, function(err, user){
            if (err){
                console.log("error trying to find user");
                res.redirect('/');
            } else {
                if (user.length == 0){
                    req.flash('registration', "CANNOT FIND USER");
                    console.log("cannot find user!")
                    res.redirect('/')
                } else {
                    console.log("found a user!!!")
                    console.log("user info",user)
                    console.log("user password", user[0].password)
                    bcrypt.hash(req.body.password, 10)
                    .then(hashed_password => {
                        bcrypt.compare(hashed_password, user[0].password)
                        .then(result =>{
                            console.log("logged in successfuly")
                            res.redirect('/pokemon')
                        })
                        .catch(error =>{
                            console.log('failed to login')
                            console.log(hashed_password, user.password)
                            res.redirect('/')
                        })
                    })
                    .catch(error => {
                        console.log("error", error)
                        res.redirect('/')
                    })
                }
            }
        })
    },
    getAllPokemon: function(req, res) {
        Pokemon.find({}, function(err, pokemon) {
            if (err){
                console.log("errors finding pokemon", err)
            } else {
                console.log('successfully found pokemon')
                res.json({pokemon})
            }
        })
    }
};
