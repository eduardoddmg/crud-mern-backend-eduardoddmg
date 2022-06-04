const mongoose = require('mongoose');

const PessoaSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    idade: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    id: String
});

const PessoaModel = mongoose.model("pessoa", PessoaSchema);
module.exports = PessoaModel;