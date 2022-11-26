var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function votacao(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var drama = req.body.dramaServer;

    // Faça as validações dos valores
    if (drama == undefined) {
        res.status(400).send("Votacao indefinida");
    }{
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.votacao(drama)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar a votação! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    votacao
}