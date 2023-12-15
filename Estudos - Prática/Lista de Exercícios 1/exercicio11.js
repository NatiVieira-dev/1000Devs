// Um tonel de refresco é feito com 8 partes de água mineral e 2 partes de suco de maracujá. Faça um algoritmo para calcular quantos litros de água e de suco são necessários para se fazer uma certa quantidade de litros de refresco informados pelo usuário.
const prompt = require('prompt-sync')();

var litroSuco = Number (prompt("Informe quantos litros de refresco pretende fazer: "));

console.log ("Você precisa de " + ((((litroSuco * 1000) / 10) *8)/1000) + "l de água e " + ((((litroSuco * 1000) / 10) *2)/1000) + "l de suco para o preparo do refresco.");
