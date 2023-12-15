// Faça um algoritmo para receber um número qualquer e informar na tela se é par ou ímpar. 

const prompt = require('prompt-sync')();

console.clear()

let numero = Number(prompt("Insira um número: "));

if (ehpar(numero) == 0){
    console.log (`${numero} é par`);
}else{
    console.log (`${numero} é ímpar`);
}

function ehpar (numero){
    return numero%2
}