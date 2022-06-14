// Como podemos melhorar o esse código usando TS? 

// let pessoa1 = {};
// pessoa1.nome = "maria";
// pessoa1.idade = 29;
// pessoa1.profissao = "atriz"

// let pessoa2 = {}
// pessoa2.nome = "roberto";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";

// let pessoa3 = {
//     nome: "laura",
//     idade: "32",
//     profissao: "Atriz"
// };

// let pessoa4 = {
//     nome = "carlos",
//     idade = 19,
//     profissao = "padeiro"
// }

interface Pessoa{
    nome: string,
    idade: Number,
    ocupacao?:ocupacao;
}

enum ocupacao{
    padeiro,
    atriz2
}
const Arthur: Pessoa = {
    nome:'Arthur',
    idade:25,
    ocupacao: ocupacao.padeiro
}
const Marcos: Pessoa = {
    nome:'Marcos',
    idade:55,
    ocupacao: ocupacao.padeiro
}
const Rebeca: Pessoa = {
    nome:'Rebeca',
    idade:22,
    ocupacao: ocupacao.atriz2
}