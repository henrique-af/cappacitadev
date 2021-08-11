var express = require('express');
var app = express();
var database = require('./database')
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/pokemons', (req, res) => {
    res.send(database.mostrarPokemons())
});

app.get('/pokemons/:id', (req, res) => {
    res.send(database.mostrarPokemon(req.params.id))
});

app.post('/pokemons', (req, res) => {
    var pokemon = database.salvarPoke({
        nome: req.body.nome,
        tipo: req.body.tipo
    })
    res.send(pokemon)
});
app.listen(3333);