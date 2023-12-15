// Tendo como dados de entrada a altura e o sexo de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas: ● para homens: (72.7 * h) – 58; ● para mulheres: (62.1 * h) – 44.7. 

const prompt = require('prompt-sync')();

console.clear();

let sexo = prompt("Qual seu sexo? digite \"F\" para feminino e \"M\" para masculino: ");
let altura = Number(prompt("Digite sua altura: "));

if (sexo == "F"){

    console.log("Seu peso ideal é de: " + ((62.1 * altura) - 44.7).toFixed(2));

}else if (sexo == "M"){

    console.log("Seu peso ideal é de: " + ((72.7 * altura) - 58).toFixed(2));

}else{
    console.log("Informe um valor válido para \"sexo\".")
}