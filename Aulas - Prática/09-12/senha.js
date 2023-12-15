const prompt = require('prompt-sync')();

let letra = "0"

console.log(letra.charCodeAt())

const VOGAIS = "aeiou"
const NUMEROS = "0123456789"


let nome = "R0ogerio 1de Frei2tas Ribeiro0"
let qtdeVogais = 0
let qtdeNumeros = 0
let indice

for (indiceNome = 0; indiceNome < nome.length; indiceNome++){
    for (indice = 0; indice < VOGAIS.length; indice++){
        if (nome.charAt(indiceNome) == VOGAIS.charAt(indice)){
            qtdeVogais = qtdeVogais + 1;
        } 

    } 

    for (indice = 0; indice < NUMEROS.length; indice++){
        if (nome.charAt(indiceNome) == NUMEROS.charAt(indice)){
            qtdeNumeros = qtdeNumeros + 1;
        } 
    } 

}


console.log(qtdeVogais)
console.log(qtdeNumeros)

