//programa para verificar se alguém pode votar e qual sua intenção de voto
const prompt = require('prompt-sync')();

let nome = prompt ("Qual o seu nome? Digite a seguir: ")
let idade = Number (prompt (nome + ", por favor digite a sua idade: "));

if (idade == 16 || idade == 17)
{
    console.log (nome + ", a votação é opcional para a sua idade.");
    let decisao = prompt ("Você deseja votar? Digite sim se pretende ou não caso não pretenda: ");

    if (decisao == "sim")
    {
        console.log ("Que ótima escolha, " + nome + "! Já tão jovem e com interesse pela democracia.");
        let voto = prompt ("Por favor, nos informe sua intenção de voto: ");
        console.log (nome + ", já registramos que você pretende votar em " + voto);
    }
}
else if (idade >= 18 && idade <= 70)
{
    console.log (nome + ", a votação é obrigatória para a sua idade.");
    let voto = prompt ("Por favor, nos informe sua intenção de voto: ")
    console.log (nome + ", já registramos que você pretende votar em " + voto);
}
else if (idade > 70)
{
    console.log (nome + ", a votação é opcional para a sua idade.");
    let decisao = prompt ("Você deseja votar? Digite sim se pretende ou não caso não pretenda: ")

    if (decisao == "sim")
    {
        console.log ("Que ótima escolha, " + nome + "! Mesmo na melhor idade, você tem interesse pela democracia!");
        let voto = prompt ("Por favor, nos informe sua intenção de voto: ");
        console.log (nome + ", já registramos que você pretende votar em " + voto);
    }
}
else
{
    console.log (nome + ", parabéns pelo interesse, mas você ainda não pode votar. Você deve esperar, ao menos, " + (16 - idade) + " anos para exercer sua democracia.");
}

console.log ("Obrigada pela sua contribuição, " + nome + "! \nPesquisa encerrada.");