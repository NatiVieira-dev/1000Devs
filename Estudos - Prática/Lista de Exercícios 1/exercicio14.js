// A lanchonete Gostosura vende apenas um tipo de sanduíche, cujo recheio inclui duas fatias de queijo, uma fatia de presunto e uma rodela de hambúrguer. Sabendo que cada fatia de queijo ou presunto pesa 50 gramas, e que a rodela de hambúrguer pesa 120 gramas, faça um algoritmo em que o dono forneça a quantidade de sanduíches a fazer, e a máquina informe as quantidades (em quilos) de queijo, presunto e carne necessários para compra.
const prompt = require('prompt-sync')();

var sanduiches = Number (prompt("Por favor informe quantos sanduiches pretende fazer: "));

console.log ("Você precisará de " + ((50 / 1000) * sanduiches).toFixed(2) + "kg de queijo, " + (((50 / 1000) * 2) * sanduiches).toFixed(2) + "kg de presunto e " + ((120 / 1000) * sanduiches).toFixed(2) + "kg de carne para montar " + sanduiches + " sanduiches.");