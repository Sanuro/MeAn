const pokemons = require('../controllers/pokemons.js');

module.exports = function(app){
    app.get('/pokemon', pokemons.getAll)
    
    app.get('/pokemon/remove/:id', pokemons.remove)

    app.post('/pokemon/:num', pokemons.add)
    
    app.get('/pokemon/:id/:num', pokemons.update)
    
    app.get('/', pokemons.index)
    
    app.post('/register', pokemons.register)
    
    app.post('/login', pokemons.login)

    app.get('/allpokemon', pokemons.getAllPokemon)
}        