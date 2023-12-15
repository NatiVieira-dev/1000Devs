// Ler um número inteiro com até quatro dígitos e imprimir a saída da seguinte forma: MILHARES = x CENTENA = x DEZENA = x UNIDADE = x
const prompt = require('prompt-sync')();

var numero = prompt("Por favor, insira um número inteiro de quatro dígitos: ");

console.log ("\nMilhares: " + numero.slice(0,1) + "\nCentena: " + numero.slice(1,2) + "\nDezena: " + numero.slice(2,3) + "\nUnidade: " + numero.slice(3,4));

