// No cinema, vou comer lanche se a soma do valor da bebida (valorBebida) com a pipoca (valorPipoca) for no máximo 80% do valor que eu tenho (valorQueTenho) e ainda se a bebida (bebida) for "coca-cola"
// let bebida = "pepsi"
// let valorBebida = 5.50
// let valorPipoca = 6.00
// let valorQueTenho = 52.50

const prompt = require('prompt-sync')();

let bebida = "pepsi"
let valorBebida = 5.50
let valorPipoca = 6.00
let valorQueTenho = 52.50

let comereiLanche = (valorBebida + valorPipoca) >= (valorQueTenho * 0.80) && bebida == "coca-cola";

console.log ("Vou lanchar? " + comereiLanche);