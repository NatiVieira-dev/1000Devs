// O algoritmo abaixo deve realizar o cálculo do tempo que será gasto na viagem e qual o valor de custo do combustível baseado nos valores inseridos pelo usuário. O valor do tempo da viagem deve ser exibido no formado de Xhoras e Yminutos, ou seja, se o tempo de viagem for de 11,11 este valor deve ser convertido para 11 horas e 7 minutos. Desta forma, você deve pensar em como converter a parte fracionária em minutos.
// Regras: 1 - Você deve manter a função converterHoras(totalHoras) . Esta função deve receber um valor de horas em fração e converter para o formato de texto desejado. 2 - As funções  calcTempoViagem(distancia, velocidadeMedia) e calcValorCombustivel(qtdeLitros, valorLitro) devem ser utilizadas sem nenhuma alterção no seu código ou parametros recebidos.

const prompt = require('prompt-sync')();

main()

function main() {
    let distancia;
    let kmPorLitro;
    let valorLitro;
    let velocidadeMedia;
    let totalHoras;
    let qtdeLitros;
    
    distancia = getFloatNumber("Digite a distância a ser percorrida (km): ");
    velocidadeMedia = getFloatNumber("Digite a velocidade média do carro: ");
    kmPorLitro = getFloatNumber("Digite quantos km/l o veículo faz: ");
    valorLitro = getFloatNumber("Digite o valor do litro do combustível: ");
    
    qtdeLitros = (distancia / kmPorLitro);
    totalHoras = calcTempoViagem (distancia, velocidadeMedia);

    console.log("\nA viagem irá demorar: " + converterHoras(totalHoras) );
    console.log("O gasto com combustível será de R$: " + calcValorCombustivel(qtdeLitros, valorLitro) );

}

function calcTempoViagem(distancia, velocidadeMedia){
    return (distancia / velocidadeMedia).toFixed(2);
}

function calcValorCombustivel(qtdeLitros, valorLitro){
    return (qtdeLitros * valorLitro).toFixed(2);
}

function converterHoras(totalHoras){
    let horaCheia = parseInt(totalHoras);
    let fracaoHora = totalHoras - horaCheia;
    let fracaoConvertida = fracaoHora * 60;
    return (horaCheia + "hora(s) e " + fracaoConvertida.toFixed(0) + "minuto(s)")
}

function getFloatNumber(message) {
    return Number(prompt(message));
}