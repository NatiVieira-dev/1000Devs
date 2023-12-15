// Faça um programa que receba a idade de 15 pessoas e que calcule e mostre: 
// a) A quantidade de pessoas em cada faixa etária;
// b) A percentagem de pessoas em cada faixa etária em relação ao total de pessoas: 
// Até 15 anos
// De 16 a 30 anos
// De 31 a 45 anos
// De 46 a 60 anos
// Acima de 61 anos
const prompt = require('prompt-sync')();

console.clear();

let contadora = 0;
let pessoasAte15 = 0;
let pessoas16a30 = 0;
let pessoas31a45 = 0;
let pessoas46a60 = 0;
let pessoasApartir61 = 0;


for (let contagem = 1; contagem <= 15; contagem++) {
    contadora = contadora + 1
    let idades = prompt("Insira a idade " + contadora + ": ")

    if (idades <= 15) 
    {
        pessoasAte15 = pessoasAte15 + 1;
    }  
    else if (idades > 15 && idades <= 30) 
    {
        pessoas16a30 = pessoas16a30 + 1;
    }
    else if (idades > 30 && idades <= 45) 
    {
        pessoas31a45 = pessoas31a45 + 1;
    }
    else if (idades > 45 && idades <= 60) 
    {
        pessoas46a60 = pessoas46a60 + 1;
    }
    else if (idades > 60) 
    {
        pessoasApartir61 = pessoasApartir61 + 1;
    }
}

console.log ("O número de pessoas até os 15 anos é " + pessoasAte15 + ". Sendo a percentagem em relação ao total de idades inseridas, o valor de " + parseInt((pessoasAte15 / 15) * 100) + "%");

console.log ("O número de pessoas entre os 16 e 30 anos é " + pessoas16a30 + ". Sendo a percentagem em relação ao total de idades inseridas, o valor de " + parseInt((pessoas16a30 / 15) * 100) + "%");

console.log ("O número de pessoas entre os 31 e 45 anos é " + pessoas31a45 + ". Sendo a percentagem em relação ao total de idades inseridas, o valor de " + parseInt((pessoas31a45 / 15) * 100) + "%");

console.log ("O número de pessoas entre os 46 e 60 anos é " + pessoas46a60 + ". Sendo a percentagem em relação ao total de idades inseridas, o valor de " + parseInt((pessoas46a60 / 15) * 100) + "%");

console.log ("O número de pessoas superior à 60 anos é " + pessoasApartir61 + ". Sendo a percentagem em relação ao total de idades inseridas, o valor de " + parseInt((pessoasApartir61 / 15) * 100) + "%");

