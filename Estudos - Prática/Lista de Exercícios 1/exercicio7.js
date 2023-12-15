// Faça um algoritmo que receba o peso de uma pessoa, calcule e mostre:
// a) o novo peso se a pessoa engordar 15% sobre o peso digitado;
// b) o novo peso se a pessoa engordar 20% sobre o peso digitado.
const prompt = require('prompt-sync')();

var peso = Number (prompt("Insira o seu peso em Kg: "));

console.log ("Caso engorde 15% pesará: " + (peso*1.15) + "Kg. \nCaso engorde 20% pesará: " + (peso*1.20) + "Kg.");