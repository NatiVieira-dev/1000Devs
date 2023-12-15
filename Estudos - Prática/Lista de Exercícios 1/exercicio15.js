// A empresa Hipotheticus paga R$10,00 por hora normal trabalhada, R$15,00 por hora extra e R$ 90 reais por cada dependente menor que 6 anos. Faça um algoritmo que solicite a quantidade de horas normais e extras trabalhadas no mês além da quantidade de dependentes menores que 6 anos. Considere que o salário líquido é igual ao salário de horas normais descontando-se 11% de impostos. O salário final é o salário liquido mais o valor recebido por cada dependente mais as horas extras.
const prompt = require('prompt-sync')();

var horaTrabalhada = Number (prompt("Por favor informe em horas, qual foi seu tempo trabalhado no mês: "));
var horaExtra = Number (prompt("Por favor informe em horas, qual foi seu tempo de hora extra no mês: "));
var dependentes = Number (prompt("Por favor informe o número de dependentes menores de 6 anos que você possuí: "));

console.log ("Horas Trabalhadas: " + (horaTrabalhada * 10).toFixed(2) + "\nHoras Extras: " + (horaExtra * 15).toFixed(2) + "\nAdicional de dependentes: " + (dependentes * 90).toFixed(2) + "\nDesconto dos Impostos: " + ((horaTrabalhada * 10) - ((horaTrabalhada * 10) * 0.11)).toFixed(2) + "\nSeu salário deste mês será de: R$" + (((horaTrabalhada * 10) - ((horaTrabalhada * 10) * 0.11)) + (horaExtra * 15) + (dependentes * 90)).toFixed(2));