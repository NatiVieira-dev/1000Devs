// Uma padaria vende uma certa quantidade de pães franceses e uma quantidade de broas a cada dia. Cada pãozinho custa R$ 0,12 e a broa custa R$ 1,60. Ao final do dia, o dono quer saber quanto arrecadou com a venda dos pães e broas (juntos), e quanto deve guardar numa conta de poupança (10% do total arrecadado) para realizar uma reforma. Você foi contratado para fazer os cálculos para o dono. Com base nestes fatos, faça um algoritmo para ler as quantidades de pães e de broas, o valor da reforma e depois calcule o valor arrecado, o valor a ser depositado na poupança e quantos dias serão necessários, caso mantenha o mesmo faturamento, para custear a reforma. Requisito adicional: A quantidade de dias deve ser retornado como um valor inteiro. Exemplo: 3.78 dias deverá retornar 4 dias, 9.2 dias deverá retornar 10 dias, 10.89 dias deverá retornar 11 dias
const prompt = require('prompt-sync')();

var paes = Number(prompt("Por favor, informe o númer de pães vendidos: "));
var broas = Number(prompt("Por favor, informe o número de broas vendidas: "));
var reforma = Number(prompt("Por favor, informe o valor da reforma a ser feita: "));

console.log ("Valor arrecadado: " + ((paes * 0.12) + (broas *1.60)) + "\nValor a ser depositado na poupança: " + ((paes * 0.12) + (broas *1.60) * 0.1) + "\nDias necessários para custear a reforma: " + (Math.ceil(reforma / ((paes * 0.12) + (broas *1.60) * 0.1))));
