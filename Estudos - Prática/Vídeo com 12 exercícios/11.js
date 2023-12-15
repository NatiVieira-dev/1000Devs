// Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
// Código Condição de pagamento
// 1 À vista em dinheiro ou cheque, recebe 10% de desconto
// 2 À vista no cartão de crédito, recebe 15% de desconto
// 3 Em duas vezes, preço normal de etiqueta sem juros
// 4 Em três vezes, preço normal de etiqueta mais juros de 10% 

const prompt = require('prompt-sync')();

console.clear();

let valorEtiqueta = Number(prompt("Informe o valor de etiqueta do produto: "));

console.log ("Estas são as condições de pagamento: \n1 À vista em dinheiro ou cheque, recebe 10% de desconto \n2 À vista no cartão de crédito, recebe 15% de desconto \n3 Em duas vezes, preço normal de etiqueta sem juros \n4 Em duas vezes, preço normal de etiqueta mais juros de 10%")

let tipoPagamento = parseInt(prompt("Informe a opção escolhida (1 - 4): "));

if(tipoPagamento == 1){

    console.log("O valor para pagamento é de: R$" + (valorEtiqueta - (valorEtiqueta * 0.10)).toFixed(2));

}else if(tipoPagamento == 2){

    console.log("O valor para pagamento é de: R$" + (valorEtiqueta - (valorEtiqueta * 0.15)).toFixed(2));

}else if(tipoPagamento == 3){

    console.log("O valor para pagamento é de 2x de: R$" + (valorEtiqueta / 2).toFixed(2));

}else if(tipoPagamento == 4){

    console.log("O valor para pagamento é de 3x de: R$" + ((valorEtiqueta + (valorEtiqueta * 0.10))/3).toFixed(2));

}else{

    console.log("Insira uma opção válida");
}