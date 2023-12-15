// O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. A fórmula é IMC = peso / ( altura )^2. Elabore um algoritmo que leia o peso e a altura de um adulto e mostre sua condição de acordo com a tabela abaixo.
// IMC em adultos Condição
// Abaixo de 18,5 Abaixo do peso
// Entre 18,5 e 25 Peso normal
// Entre 25 e 30 Acima do peso
// Acima de 30 obeso 

const prompt = require('prompt-sync')();

console.clear();

let peso = Number(prompt("Informe seu peso: "));
let altura = Number(prompt("Informe sua altura: "));
let imc = (peso / (altura * altura)).toFixed(1);

if ((imc > 0) && (imc < 18.5)){
    console.log(`Seu IMC é de ${imc}, você está abaixo do peso indicado.`);
}else if ((imc >= 18.5) && (imc <= 25)){
    console.log(`Seu IMC é de ${imc}, você está com o peso indicado.`);
}else if ((imc > 25) && (imc <= 30)){
    console.log(`Seu IMC é de ${imc}, você está acima do peso indicado.`);
}else if (imc > 30){
    console.log(`Seu IMC é de ${imc}, você está com peso considerado obesidade.`);
}else {
    console.log("Informe valores válidos.")
}