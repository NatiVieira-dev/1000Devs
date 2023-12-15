// crio uma classe
class Pessoa 
{
    constructor(nome, idade)
    {
        this.nome = nome;
        this.idade = idade;
    }

    saudacao()
    {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade}`);
    }
}

//crio uma classe
class Animal
{
    constructor(nome, tipo)
    {
        this.nome  = nome;
        this.tipo = tipo;
    }

    som()
    {
        console.log(`O ${this.tipo} chamado ${this.nome} faz um som`);
    }

}

//crio objetos da classe
const cachorro = new Animal(`Tiranossauro`, `cachorro`);
const gato = new Animal(`Mingau`, `gato`);
const urso = new Animal(`Marsha`, `urso`);

//chamo o método (ações do objeto) som
cachorro.som();
gato.som();
urso.som(); //saída "o URSO chamado MARSHA faz um som"

