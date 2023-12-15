// Escreva um algoritmo que leia três valores inteiros e diferentes e mostre-os em ordem decrescente. 

const prompt = require('prompt-sync')();

console.clear();

let a = parseInt(prompt("Insira um número inteiro: "));
let b = parseInt(prompt("Insira outro número inteiro: "));
let c = parseInt(prompt("Insira um terceiro número inteiro: "));

if ((a == b) || (a == c) || (b == c)){

    console.log("Nenhum número pode ser igual a outro. Por favor insira números diferentes.");

}else if ((a > b) && (a > c)){

    if (b > c){
        console.log(a, b, c);
    }else{
        console.log(a, c, b);
    }

}else if ((b > a) && (b > c)){

    if (a > c){
        console.log(b, a, c);
    }else{
        console.log(b, c, a);
    }

}else if ((c > a) && (c > b)){
    
    if (a > b){
        console.log(c, a, b);
    }else{
        console.log(c, b, a);
    }
}