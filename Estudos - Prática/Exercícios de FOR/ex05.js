// Faça um programa que receba a idade, altura e o peso de 25 pessoas. Calcule e mostre:
// a) A quantidade de pessoas com idade superior a 50 anos;
// b) A média das Alturas das pessoas com idade entre 10 e 20 anos
// c) A porcentagem das pessoas com peso inferior a 40 quilos entre todas as pessoas analisadas.  
const prompt = require('prompt-sync')();

console.clear();

let pessoasMais50 = 0;
let pessoas10a20 = 0;
let somaAlturas10a20 = 0;
let pessoasPesoInf40 = 0;


for (let contadora = 1; contadora <= 3; contadora++) 
{

    let  idades = Number(prompt("Insira a idade da pessoa " + contadora + ": "));
    let  alturas = Number(prompt("Insira a altura da pessoa " + contadora + ": "));
    let  pesos = Number(prompt("Insira o peso da pessoa " + contadora + ": "));

    if (idades > 50) 
    {
        pessoasMais50 = pessoasMais50 + 1;
    }

    if ((idades >= 10) && (idades <= 20))
    {
        pessoas10a20 = pessoas10a20 +1;
        somaAlturas10a20 = somaAlturas10a20 + alturas;
    }

    if (pesos < 40)
    {
        pessoasPesoInf40 = pessoasPesoInf40 + 1;
    }
}

console.log("Número de pessoas com idade superior a 50 anos: " + pessoasMais50);
console.log("Média das alturas das pessoas entre 10 e 20 anos: " + (somaAlturas10a20 / pessoas10a20).toFixed(2));
console.log("Porcentagem de pessoas com peso inferior a 40kg: " + ((pessoasPesoInf40 / 3) * 100).toFixed(2) + "%");
