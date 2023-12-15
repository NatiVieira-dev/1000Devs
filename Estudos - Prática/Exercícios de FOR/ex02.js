// Escreva um aplicativo que recebe um número inteiro. Mostre uma lista para os números pares e uma lista para os números ímpares separados por , entre o número 1 até esse número inteiro fornecido pelo usuário.
const prompt = require('prompt-sync')();

console.clear();

let numeroInserido = parseInt(prompt("Insira um número: "));
let pares = [];
let impares = [];


for (let contadora = 1; contadora <= numeroInserido; contadora++) {

    if (ehPar(contadora) == 0) {
        pares.push(contadora);
    }
    else 
    {
        impares.push(contadora);
    }

    function ehPar(contadora) 
    {
        return contadora % 2
    }

};

console.log(impares);
console.log(pares);

