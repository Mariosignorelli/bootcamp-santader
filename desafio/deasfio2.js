"use strict";
// Como podemos melhorar o esse código usando TS? 
var ocupacao;
(function (ocupacao) {
    ocupacao[ocupacao["padeiro"] = 0] = "padeiro";
    ocupacao[ocupacao["atriz2"] = 1] = "atriz2";
})(ocupacao || (ocupacao = {}));
const Arthur = {
    nome: 'Arthur',
    idade: 25,
    ocupacao: ocupacao.padeiro
};
const Marcos = {
    nome: 'Marcos',
    idade: 55,
    ocupacao: ocupacao.padeiro
};
const Rebeca = {
    nome: 'Rebeca',
    idade: 22,
    ocupacao: ocupacao.atriz2
};
