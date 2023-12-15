// Treino parseFloat, concatenação x soma, .toFixed

const prompt = require('prompt-sync')();

var valor = parseFloat (prompt("Digite um valor: "));       

console.log("A variável somada com 10 produz o resultado: " + (valor + 10).toFixed(2));