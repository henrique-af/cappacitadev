const express = require('express');
const app = express();
const database = require('./database')
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/pokemons', (req, res) => {
    res.send(database.mostrarPokemons())
});

app.get('/pokemons/:id', (req, res) => {
    res.send(database.mostrarPokemon(req.params.id))
});

app.post('/pokemons', (req, res) => {
    const pokemon = database.salvarPoke({
        nome: req.body.nome,
        tipo: req.body.tipo,
        fraqueza: req.body.fraqueza,
        resistencia: req.body.resistencia,
        hp: 100,
        id: parseInt(req.params.id)
    })
    res.send(pokemon)
});

app.put('/pokemons/:id', (req, res) => {
    const pokemon = database.atualizarPokemon(req.params.id, {
        nome: req.body.nome,
        tipo: req.body.tipo,
        fraqueza: req.body.fraqueza,
        resistencia: req.body.resistencia,
        hp: 100,
        id: parseInt(req.params.id)
    });
    res.send(pokemon);
});

app.delete('/pokemons/:id', (req, res) => {
    res.send(database.deletarPokemon(req.params.id))
});

app.post('/batalha', (req, res) => {
    res.send(database.batalhaPokemon(req.body.id1, req.body.id2))
});

app.post('/curar', (req, res) => {
    res.send(database.curarPokemon(req.body.id1))
});

app.listen(3333);