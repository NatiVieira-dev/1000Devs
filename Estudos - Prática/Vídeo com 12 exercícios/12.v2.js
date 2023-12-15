// Escreva um algoritmo que leia o número de identificação, as 3 notas obtidas por um aluno nas 3 verificações e a média dos exercícios que fazem parte da avaliação, e calcule a média de aproveitamento, usando a fórmula: MA := (nota1 + nota 2 * 2 + nota 3 * 3 + ME)/7. A atribuição dos conceitos obedece a tabela abaixo. O algoritmo deve escrever o número do aluno,suas notas, a média dos exercícios, a média de aproveitamento, o conceito correspondente e a mensagem 'Aprovado' se o conceito for A, B ou C, e 'Reprovado' se o conceito for D ou E.
// Média de aproveitamento Conceito
// >= 90 A
// >= 75 e < 90 B
// >= 60 e < 75 C
// >= 40 e < 60 D
// < 40 E 

const prompt = require('prompt-sync')();

console.clear();

let numeroIdentificação = prompt("Infome o Número de Identificação de seu/sua estudante: ");
let nota1 = Number(prompt("Infome a nota 1: "));
let nota2 = Number(prompt("Infome a nota 2: "));
let nota3 = Number(prompt("Infome a nota 3: "));
let mediaDasNotas = Number(prompt("Infome a média simples dessas avaliações: "));

let mediaAproveitamento = (nota1 + (nota2 * 2) + (nota3 * 3) + mediaDasNotas)/7

console.log(`\nNúmero do/da estudante: ${numeroIdentificação} \nNotas obtidas: ${nota1}, ${nota2}, ${nota3} \nMédia das notas obtidas: ${mediaDasNotas} \nMédia de Aproveitamento: ${mediaAproveitamento}`);

    
if((mediaAproveitamento >= 90) && (mediaAproveitamento <= 100)){
        console.log("\nConceito obtido: A \nEstudante Aprovado");

}else if((mediaAproveitamento < 90) && (mediaAproveitamento >= 75)){
        console.log("\nConceito obtido: B \nEstudante Aprovado");

}else if((mediaAproveitamento < 75) && (mediaAproveitamento >= 60)){
        console.log("\nConceito obtido: C \nEstudante Aprovado");
}
else if((mediaAproveitamento < 60) && (mediaAproveitamento >= 40)){
        console.log("\nConceito obtido: D \nEstudante Reprovado");

}else if(mediaAproveitamento < 40){
        console.log("\nConceito obtido: E \nEstudante Reprovado");
}else{
    console.log("Foram inseridos valores invalidos, por favor refaça a operação.");
}
