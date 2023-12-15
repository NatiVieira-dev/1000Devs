// O aluno será aprovado se a nota final do aluno (notaFinal) é maior ou igual a 60 e a frequência do aluno (aulasPresentes) é maior ou igual a 80% do total de aulas (totalAulas)

const prompt = require('prompt-sync')();

let notaFinal = Number (prompt("Insira a nota final do Estudante (0 - 10): "));
let totalAulas = Number (prompt("Insira a quantidade total de encontros que o curso teve: "));
let aulasPresentes = Number (prompt("Insira o número de encontros em que o estudante compareceu: "));

let resultado = (notaFinal >= 6.0) && (aulasPresentes >= (totalAulas * 0.80))

if (resultado == true)
{
    console.log ("\nO/A estudante foi aprovado");
}
else
{
    console.log ("\nO/A estudante foi reprovado");
}


