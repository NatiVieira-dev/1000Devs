// Faça um algoritmo para ler três notas de um aluno em uma disciplina e imprimir a sua
// média ponderada (as notas tem pesos respectivos de 1, 2 e 3).
const prompt = require('prompt-sync')();

var nomeAluno;
var nota1;
var nota2;
var nota3;
var resultado;

nomeAluno = prompt ("Insira o nome de seu estudante: ");
nota1 = Number(prompt ("Insira a nota 1: "));
nota2 = Number(prompt ("Insira a nota 2: "));
nota3 = Number(prompt ("Insira a nota 3: "));

resultado = ( (nota1 * 1) + (nota2 * 2) + (nota3 * 3) ) / 6;

console.log("A média ponderada de " + nomeAluno + "é de: " + resultado)