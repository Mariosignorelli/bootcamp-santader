let anyEstaeVolta: any;
anyEstaeVolta = 3;
anyEstaeVolta ='hello';
anyEstaeVolta =9;

let stringHelo: string = 'verificar';
stringHelo = anyEstaeVolta;

let unknownValor: unknown;
unknownValor = 3;
unknownValor ='agora';
unknownValor = true;
unknownValor =' agora sim';

let string2: string = 'agoar vai';

 if(typeof string2 === 'string'){
    string2 = 'teste'
 }
 function jogaErro(erro: string, codigo:number): never {
    throw{error: erro,  code: codigo }
 }
 jogaErro('deu erro', 500);