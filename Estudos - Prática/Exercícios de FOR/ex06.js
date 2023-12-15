//Faça um programa que receba dez números e usando laços de repetição calcule e mostre a quantidade de números entre 30 e 90.  
const prompt = require('prompt-sync')();

qtdNumeros = 0;

for (let contadora = 1; contadora <= 10; contadora++) 
{
    let valor = prompt("Insira o número " + contadora + ": ");

    if ((valor >=30) && (valor <= 90))
    {
        qtdNumeros = qtdNumeros + 1;
    }
};

console.log("A quantidade de números entre 30 e 90 é: " + qtdNumeros);