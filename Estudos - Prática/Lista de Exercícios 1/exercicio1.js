// Uma imobiliária vende apenas terrenos retangulares. Faça um algoritmo para imprimir a área do terreno e o valor de venda do mesmo. Para isto será necessário o usuário informar as dimensões em metros (frente e lateral) do terreno além do valor cobrado pelo metro quadrado.
const prompt = require('prompt-sync')();

var frente = Number (prompt ("Insira quantos metros o terreno tem de frente: "));
var lateral = Number (prompt ("Insira quantos metros o terreno tem de lateral: "));
var valorMetroQuadrado = Number (prompt ("Insira o valor do metro quadrado da região: "));

console.log ("A área deste terreno é de:" + (frente * lateral) + " e o seu valor de venda tem o investimento de: R$" + ((frente*lateral)*valorMetroQuadrado).toFixed(2));