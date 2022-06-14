"use strict";
// function ValorNumericos(n1: number ,n2:number):Number {
//     return n1 + n2
// }
// console.log(ValorNumericos(8,2))
function printValoresNumericos(numero1, numero2) {
    console.log(numero1 + numero2);
}
function NumericosEtratar(numero1, numero2, callback) {
    let resultado = numero1 + numero2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
function numeroividoPorelemesmo(numero) {
    return numero / numero;
}
console.log(NumericosEtratar(9, 9, aoQuadrado));
console.log(NumericosEtratar(9, 9, numeroividoPorelemesmo));
