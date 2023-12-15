// Faça um algoritmo para ler o salário de um funcionário e aumentá-Io em 15%. Após o aumento, desconte 11% de INSS e 8% de FGTS. Imprima o salário inicial, o salário com o aumento, o salário final, o desconto do INSS, o desconto do FGTS e o Total de Descontos (INSS+FGTS).
const prompt = require('prompt-sync')();

var salario = Number (prompt("Insira o valor do salário: "));
var novoSalario = salario*1.15

console.log ("Seu salário inicial é de: R$" + salario + "\nCom o aumento de 15% irá para: R$" + novoSalario + "\nConsequentemente, seu desconto de INSS ficará em: R$" + (novoSalario*0.11).toFixed(2) + " e seu desconto de FGTS em: R$" + (novoSalario*0.08).toFixed(2) + "\nTotalizando R$" + ((novoSalario*0.11) + (novoSalario*0.08)).toFixed(2) + " de desconto. \nDessa forma seu salário líquido será: R$" + (novoSalario - ((novoSalario*0.11) + (novoSalario*0.08))).toFixed (2) );