// Viajarei no fim de semana, se a passagem de ônibus (valorPassagemOnibus) for menor ou igual ao valor que tenho (valorQueTenho) e tenha passagem de onibus (temPassagemOnibus) ou consiga carona de carro (temCaronaCarro)

const prompt = require('prompt-sync')();

let valorPassagemOnibus = Number(prompt("Informe o valor da passagem: "));
let valorQuePossui = Number(prompt("Informe o valor que você possui: "));
let temPassagem = prompt("Tem passagem de ônibus disponível? Digite sim ou não: ");
let temCarona = prompt("Você consegue carona? Digite sim ou não: ")

let vaiTerViagem = (valorPassagemOnibus <= valorQuePossui) && (temPassagem == "sim" || temCarona == "sim");

if (vaiTerViagem == true)
{
    console.log ("Você irá viajar");
}
else
{
    console.log ("Você não irá viajar");
}