// A granja Frangotech possui um controle automatizado de cada frango da sua produção. No pé direito do frango há um anel com um chip de identificação; no pé esquerdo são dois anéis para indicar o tipo de alimento que ele deve consumir. Sabendo que o anel com chip custa R$4,00 e o anel de alimento custa R$3,50, faça um algoritmo para calcular o gasto total da granja para marcar todos os seus frangos que deverá ser informado pelo usuário.
const prompt = require('prompt-sync')();

var frangos = Number (prompt("Por favor, informe o número de frangos da sua granja: "));

console.log ("Você terá um custo de R$" + ((frangos * 4) + ((frangos * 2) * 3.5)) + " para marcar todos os seus frangos");
