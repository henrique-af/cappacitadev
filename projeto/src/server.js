const express = require('express');
const app = express();
const database = require('./database/database')
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/pokemons', async (req, res) => {
    res.send(await database.mostrarPokemons())
});

app.get('/pokemons/:id', async (req, res) => {
    res.send(await database.mostrarPokemon(req.params.id))
});

app.post('/pokemons', async (req, res) => {
    const pokemon = await database.salvarPoke({
        nome: req.body.nome,
        tipo: req.body.tipo,
        fraqueza: req.body.fraqueza,
        resistencia: req.body.resistencia,
        origem: req.body.origem
    })
    res.send(pokemon)
});

app.put('/pokemons/:id', async (req, res) => {
    const pokemon = await database.atualizarPokemon(req.params.id, {
        nome: req.body.nome,
        tipo: req.body.tipo,
        fraqueza: req.body.fraqueza,
        resistencia: req.body.resistencia,
        origem: req.body.origem
    })
    res.send(pokemon)
});


app.delete('/pokemons/:id', async (req, res) => {
    res.send(await database.deletarPokemon(req.params.id))
});

app.post('/batalha', (req, res) => {
    res.send(database.batalhaPokemon(req.body.id1, req.body.id2))
});

app.post('/curar', (req, res) => {
    res.send(database.curarPokemon(req.body.id1))
});

app.listen(3333);