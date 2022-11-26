var database = require("../database/config")

function votacao(){
    var instrucao = `INSERT INTO votacao (fkusuario, fkDrama, notaDrama) VALUES ('${idUsuario}','${drama}','1');`;
}

module.exports = {
    votacao,
};