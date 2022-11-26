var express = require("express");
var router = express.Router();

router.post("/votacao",function(req, res){
    usuarioController.votacao(req,res);
});

module.exports = router