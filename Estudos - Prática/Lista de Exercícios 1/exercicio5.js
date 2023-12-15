// Faça um algoritmo que receba dois números inteiros, calcule e mostre a divisão do primeiro número pelo segundo. Sabe-se que o segundo número não pode ser zero, portanto não é necessário se preocupar com validações.
const prompt = require('prompt-sync')();

var numero1 = parseInt (prompt("Insira o primeiro número: "));
var numero2 = parseInt (prompt("Insira o segundo número: "));

console.log ("A divisão de " + numero1 + " por " + numero2 + " é: " + (numero1/numero2));