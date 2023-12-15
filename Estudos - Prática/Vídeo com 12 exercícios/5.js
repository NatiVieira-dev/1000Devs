// Encontrar o dobro de um número caso ele seja positivo e o seu triplo caso seja negativo, imprimindo o resultado. 

const prompt = require('prompt-sync')();

console.clear();

let numero = Number(prompt("Insira um número: "));

if (numero >= 0){

    console.log ("O resultado é: " + numero*2);

} else{
   
    console.log ("O resultado é: " + numero*3);
}