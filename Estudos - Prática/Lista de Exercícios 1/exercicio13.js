// A fábrica de refrigerantes Meia-Cola vende seu produto em três formatos: lata de 350ml, garrafa de 600 ml e garrafa de 2 litros. Se um comerciante compra uma determinada quantidade de cada formato, faça um algoritmo para calcular quantos litros de refrigerante ele comprou.
const prompt = require('prompt-sync')();

var lata = Number (prompt("Por favor informe quantas latas você comprou: "));
var garrafinha = Number (prompt("Por favor informe quantas garrafas de 600ml você comprou: "));
var garrafa = Number (prompt("Por favor informe quantas garrafas de 2L você comprou: "));

console.log ("Você adquiriu " + (((350 / 1000) * lata) + ((600 / 1000) * garrafinha) + (2 * garrafa)).toFixed(2) + "litros de refrigerante");