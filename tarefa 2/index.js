const Calculadora = require('./src/calculadora');

let somaCalc = Calculadora.soma(2, 3);
let subCalc = Calculadora.subtracao(5, 4);
let multCalc = Calculadora.multiplicacao(3, 5);
let divCalc = Calculadora.divisao(20, 10);
let quadCalc = Calculadora.quadrado(3);

console.log(somaCalc);
console.log(subCalc);
console.log(multCalc);
console.log(divCalc);
console.log(quadCalc);