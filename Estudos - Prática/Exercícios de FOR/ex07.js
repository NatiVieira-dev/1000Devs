// Faça um programa que receba o valor de um carro e mostre uma tabela com os seguintes dados: preço final, quantidade de parcelas e valor da parcela. Considere o seguinte:
// a) O preço final para compra à vista tem um desconto de 20%;
// b) A quantidade de parcelas podem ser: 6, 12, 18, 24, 30, 36, 42, 48, 54 e 60.
// c) Os percentuais de acréscimo seguem a tabela a seguir.
// Quantidade de parcelas => Percentual de acréscimo sobre o preço final
// 6x => 3%
// 12x => 6%
// 18x => 9%
// 24x => 12%
// 30x => 15%
// 36x => 18%
// 42x => 21%
// 48x => 24%
// 54x => 27%
// 60x => 30%  
const prompt = require('prompt-sync')();

console.clear();

let valorCarro = Number(prompt("Insira o valor do carro: "));
let cont = 0


console.log("O valor a vista será de: R$" + (valorCarro - (valorCarro * 0.2)).toFixed(2));

for (let contadora = 6; contadora <= 60; contadora = contadora + 6) 
{
    cont = cont + 3;
    
    let precoFinal = (valorCarro * (1 + (cont / 100))).toFixed(2);
    let valorParcela = (precoFinal / contadora).toFixed(2);

   
    
    console.log ("Número de Parcelas: " + contadora + "  |  Valor Total: " + precoFinal + "  |  Valor da Parcela: " + valorParcela);
}