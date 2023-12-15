// Mostre a tabela do código ASCII dos números 32 até 126. Utilize o método String.fromCharCode(Numero)
const prompt = require('prompt-sync')();

console.clear();

let valor;

for (let contadora = 32; contadora <= 126; contadora++) 
{
    valor = String.fromCharCode(contadora)
    console.log("O número " + contadora + " equivale à: " + valor);
    
}