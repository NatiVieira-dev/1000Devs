// Três amigos, Carlos, André e Felipe. decidiram rachar igualmente a conta de um bar. Faça um algoritmo para ler o valor total da conta e imprimir quanto cada um deve pagar, mas faça com que Carlos e André não paguem centavos. Ex: uma conta de R$101,53 resulta em R$33,00 para Carlos, R$33,00 para André e R$35,53 para Felipe.
const prompt = require('prompt-sync')();

var valorConta = Number (prompt("Por favor, informe o valor da conta: "));
var valorDivisao = valorConta / 3
var valorCentavos = valorDivisao - parseInt(valorDivisao)

console.log ("Carlos pagará: " + (parseInt(valorDivisao)) + "\nAndré pagará: " + (parseInt(valorDivisao)) + "\nFelipe pagará: " + (valorDivisao + (2 * valorCentavos)).toFixed(2));
