// Faça um algoritmo que receba o ano de nascimento de uma pessoa e o ano atual, calcule e mostre: a idade dessa pessoa em anos; a idade dessa pessoa em meses; a idade dessa pessoa em dias (considere todos os meses com 30 dias); a idade dessa pessoa em semanas (considere que todos os messes possuem 4 semanas)
const prompt = require('prompt-sync')();

var anoNascimento = Number (prompt("Insira seu ano de nascimento: "));
var anoAtual = Number (prompt("Insira o ano atual: "));

console.log ("Você tem" + (anoAtual - anoNascimento) + " anos. \nOu " + ((anoAtual - anoNascimento)*12) + " meses. \nOu, ainda, " + ((anoAtual - anoNascimento)*(12*30)) + " dias. \nQue também são considerados, "+ ((anoAtual - anoNascimento) * (12 * 4)) + "semanas.");