// Escreva um programa que realize o cálculo do valor de uma prestação em atraso, utilizando a fórmula: prestacaoEmAtraso = prestacao + (prestacao*(juro/100) * mesesEmAtraso). Você deve obter do usuário o valor da prestação, a quantidade de meses em atraso e a taxa de juros mensal. O cálculo da prestação deve ser realizado por uma função que receba os parametros necessários para o cálculo e retorne o valor final da prestação em atraso.

const prompt = require('prompt-sync')();

main ()

function main ()
{
    let valorPrestacao = Number(prompt("Por favor, informe o valor da sua prestação: "));
    let mesesEmAtraso = Number(prompt("Por favor, informe os meses em atraso: "));
    let taxaJurosMensal = Number(prompt("Por favor, informe a taxa de juros mensal: "));

    console.log ("\nO valor de sua prestação em atraso é de: R$" + prestacaoEmAtraso (valorPrestacao, mesesEmAtraso, taxaJurosMensal));

    function prestacaoEmAtraso (valor, mesesAtrasados, juros)
    {
        return (valor + ((valor * (juros / 100)) * mesesAtrasados)).toFixed(2);
    }

}