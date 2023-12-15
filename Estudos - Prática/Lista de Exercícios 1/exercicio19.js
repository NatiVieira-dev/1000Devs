// Entrar com o dia e o mês de uma data e informar quantos dias se passaram desde o início do ano. Esqueça a questão dos anos bissextos e considere sempre que um mês possui 30 dias.
const prompt = require('prompt-sync')();

var dia = Number(prompt("Por favor, informe o dia de hoje: "));
var mes = Number(prompt("Agora informe o mês atual (na representação numeral): "));

console.log ("\nSe passaram " + (((mes - 1) * 30) + dia) + " dias desde o início do ano");