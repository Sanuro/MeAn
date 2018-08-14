var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/pokemon_demo')

var PokemonSchema = new mongoose.Schema({
    name: String,
    abilities: Array,
    stats: Array
})

var UserSchema = new mongoose.Schema({
    first_name: {type: String, required: true, minlength: 2},
    last_name: {type: String, required: true, minlength: 2},
    email: {type: String, required: true, minlength: 4},
    password: {type: String, required: true, minlength: 6}
}, {timestamps: true })


mongoose.model('Pokemon', PokemonSchema);
mongoose.model('User', UserSchema);

mongoose.Promise = global.Promise;