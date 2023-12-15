// Faça um algoritmo que receba o valor do salário mínimo e o valor do salário de um funcionário, calcule e mostre a quantidade de salários mínimos que ganha esse funcionário. 
const prompt = require('prompt-sync')();

var salarioMinimo = Number (prompt("Por favor, informe o valor atual do salário mínimo (utilizando '.' em caso de valor fracionário): "));
var nomeFuncionario = prompt ("Por favor, informe o nome do funcionário: ");
var salarioFuncionario = Number (prompt ("Por favor, informe o salário atual do funcionário (utilizando '.' em caso de valor fracionário): "));

console.log (nomeFuncionario + " recebe " + (salarioFuncionario / salarioMinimo).toFixed(1) + " salários mínimos.");