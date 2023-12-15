// Faça um algoritmo que leia os dados necessários para calcular e exibir a área de um: trapézio, quadrado, retangulo, círculo, triangulo.
const prompt = require('prompt-sync')();

prompt ("Vamos calcular a área de um Trapézio.");
var trapezioBaseMaior = Number (prompt("Insira o valor da base maior: "));
var trapezioBaseMenor = Number (prompt ("Insira o valor da base menor: "));
var trapezioAltura = Number (prompt("Insira o valor da altura: "));

console.log ("A área do trapézio é de " + (((trapezioBaseMaior + trapezioBaseMenor)*trapezioAltura)/2).toFixed(2));

prompt ("\nVamos calcular a área de um Quadrado.");
var quadradoLado = Number (prompt("Insira o valor de um de seus lados: "));

console.log ("A área do quadrado é de " + (quadradoLado * quadradoLado).toFixed(2));

prompt ("\nVamos calcular a área de um Retangulo.");
var retanguloBase = Number (prompt("Insira o valor da base: "));
var retanguloAltura = Number (prompt("Insira o valor da altura: "));

console.log ("A área do retangulo é de " + (retanguloBase * retanguloAltura).toFixed(2));

prompt ("\nVamos calcular a área de um Círculo.");
var raioCirculo = Number (prompt("Insira o valor do raio: "));

console.log ("A área do círculo é de " + (Math.PI * (raioCirculo*raioCirculo)).toFixed(2));

prompt ("\nVamos calcular a área de um Triângulo.");
var trianguloBase = Number (prompt("Insira o valor da base: "));
var trianguloAltura = Number (prompt("Insira o valor da altura: "));

console.log ("A área do triângulo é de " + ((trianguloBase * trianguloAltura) / 2).toFixed(2));
