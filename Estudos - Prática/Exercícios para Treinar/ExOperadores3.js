// O veículo chegará ao destino se a distância a ser percorrida (percorrerDistancia) é menor ou igual a quantidade de combustível (qtdeCombustivel) multiplicado pela média de km por litro (mediaKmLitro)
// let percorrerDistancia = 800
// let mediaKmLitro = 9
// let qtdeCombustivel = 80

const prompt = require('prompt-sync')();

let percorrerDistancia =  800;
let mediaKmLitro = 9;
let qtdeCombustivel = 80;

let resultado = percorrerDistancia <= (qtdeCombustivel * mediaKmLitro);

if (resultado == true)
{
    console.log ("O veículo chegará ao destino");
}
else 
{
    console.log ("O veículo não chegará ao destino");
}