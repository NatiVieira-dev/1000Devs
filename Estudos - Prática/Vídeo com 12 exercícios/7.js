// Faça um algoritmo que leia uma variável e some 5 caso seja par ou some 8 caso seja ímpar, imprimir o resultado desta operação. 

const prompt = require('prompt-sync')();

console.clear();

let numero = Number(prompt("Insira um número: "));

if (ehpar(numero) == 0){
    console.log (numero + 5);
}else{
    console.log (numero + 8);
}

function ehpar (numero){
    return numero%2
}