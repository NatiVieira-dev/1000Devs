// Faça um algoritmo para calcular quantas ferraduras são necessárias para equipar todos os cavalos comprados para um haras. O usuário devera informar a quantidade de cavalos adquiridos. 
const prompt = require('prompt-sync')();

var cavalos = Number (prompt("Insira quantos cavalos foram adquiridos: "));

console.log ("São necessárias " + (cavalos * 4) + " ferraduras para equipar seus cavalos adequadamente.");