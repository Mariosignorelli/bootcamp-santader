"use strict";
let anyEstaeVolta;
anyEstaeVolta = 3;
anyEstaeVolta = 'hello';
anyEstaeVolta = 9;
let stringHelo = 'verificar';
stringHelo = anyEstaeVolta;
let unknownValor;
unknownValor = 3;
unknownValor = 'agora';
unknownValor = true;
unknownValor = ' agora sim';
let string2 = 'agoar vai';
if (typeof string2 === 'string') {
    string2 = 'teste';
}
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro('deu erro', 500);
