// Escreva um algoritmo que lê dois valores booleanos (lógicos) e então determina se ambos são VERDADEIROS ou FALSOS. 

const prompt = require('prompt-sync')();

console.clear();

let a = prompt("Insira uma letra: ");
let b = prompt("Insira uma letra: ");
let c = Number(prompt("Insira um número: "));
let d = Number(prompt("Insira um número: "));

let e = (a <= "k" && b >= "l");
let f = (c == 0 || (d > 0 && d <= 10));

if ((e == true) && (f == true)){

    console.log("Ambas são verdadeiros")

}else if ((e == false) && (f == false)){
    
    console.log("Ambas são falsos")
} else{

    console.log("Uma é verdadeira e a outra é falsa.")
}

