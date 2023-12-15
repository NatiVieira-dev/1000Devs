// Faça um programa que recebe a quantidade de caracteres da base de um triangulo e imprima este triângulo utilizando asteriscos. Quando for fornecido um número que não permita a construção do triângulo perfeito, uma mensagem deverá ser exibida informando.
const prompt = require('prompt-sync')();

console.clear();

let valorInserido = parseInt(prompt("Insira um número de caracteres para a base de um triângulo: "));

if ((ehImpar(valorInserido) == 1) && valorInserido >= 5)
{
    for (let contadora = 1; contadora <= valorInserido; contadora = contadora + 2) {
        let espacos = (valorInserido - contadora) / 2;
        let linha = " ".repeat(espacos) + "*".repeat(contadora);
        console.log(linha);
    }
}
else
{
    console.log ("Não é possível construir um triângulo perfeito com este número de caracteres para a base. Tente novamente.")
}


function ehImpar(numero) 
    {
        return numero % 2 
    }
