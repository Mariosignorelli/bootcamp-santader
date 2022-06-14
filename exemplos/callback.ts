

// function ValorNumericos(n1: number ,n2:number):Number {
//     return n1 + n2
// }
// console.log(ValorNumericos(8,2))

function printValoresNumericos(numero1:number,numero2:number): void {
  console.log(numero1 + numero2)
}


function NumericosEtratar(numero1: number ,numero2:number, callback:(numero: number) =>number): number {
    let resultado =  numero1 + numero2
    return callback(resultado)
}

function aoQuadrado(numero:number): number{
    return numero * numero
}
function numeroividoPorelemesmo(numero: number): number{
    return numero /numero
}
console.log(NumericosEtratar(9,9,aoQuadrado))
console.log(NumericosEtratar(9,9,numeroividoPorelemesmo))
