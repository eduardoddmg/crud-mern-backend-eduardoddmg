const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const PessoaModel = require('./Models/Pessoa')

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://admin:12345@cluster0.yrfjf.mongodb.net/crud-mern?retryWrites=true&w=majority"
);

app.get('/', async (req, res) => {
    PessoaModel.find({}, (err, result) => {
        if (err) res.send(err);
        else res.send(result);
    })
});

app.post('/criar', async (req, res) => {
    const pessoa = req.body;
    console.log(pessoa);
    const newPessoa = new PessoaModel(pessoa);
    await newPessoa.save();
});

app.delete('/apagar/:id', async (req, res) => {
    await PessoaModel.findOneAndDelete({id: req.params.id});
});

app.put('/editar/:id', async (req, res) => {
    const nome = req.body.nome;
    const idade = req.body.idade;
    const email = req.body.email;
    await PessoaModel.findOneAndUpdate({id: req.params.id}, {nome, idade, email})
})

app.listen(8080, () => {
    console.log('esta funcionando');
});