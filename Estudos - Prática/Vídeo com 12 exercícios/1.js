// Faça um algoritmo que leia os valores A, B, C e imprima na tela se a soma de A + B é menor que C. 

const prompt = require('prompt-sync')();

console.clear()

let a = Number(prompt("Insira um valor: "));
let b = Number(prompt("Insira um valor: "));
let c = Number(prompt("Insira um valor: "));

if ((a + b) < c){
    console.log (`A soma de ${a} + ${b} é menor que ${c}`)
};