// Desenvolva um algoritmo para calcular a quantidade de dias entre dois meses fornecidos pelo usuário, mês inicial e mês final. Desenvolva uma regra para tratar a possibilidade do mês inicial ser maior que o mês final. Caso isto ocorra apresente a mensagem: "Mês inicial não pode ser maior que o mês final".
// REGRAS: Não deve ser utilizado vetores ou matrizes. Utilize apenas um laço for e estruras de decisão. 
const prompt = require('prompt-sync')();

let mesInicial = Number(prompt("Digite o mês inicial: "));
let mesFinal = Number(prompt("Digite o mês final: "));

if (mesInicial > mesFinal) 
{
    console.log("Mês inicial não pode ser maior que mês final. Tente novamente.");
}
else
{
    
    
}
