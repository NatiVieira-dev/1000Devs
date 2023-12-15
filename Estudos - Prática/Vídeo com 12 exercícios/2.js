// Faça um algoritmo que leia o nome, o sexo e o estado civil de uma pessoa. Caso sexo seja “F” e estado civil seja “CASADA”, solicitar o tempo de casada (anos). 

const prompt = require('prompt-sync')();

console.clear();

let nome = prompt("Insira seu nome: ");
let genero = prompt("Insira seu gênero: ");
let estadoCivil= prompt("Insira seu estado civil: ");

if (genero == "feminino" && estadoCivil == "casada"){
    let tempoCasada = prompt("A quantos anos você é casada: ");
    console.log(`${nome} é casada a ${tempoCasada} anos.`)
}
