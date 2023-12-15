//crio uma classe PAI
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

class Cachorro extends Animal //crio classes FILHAS
{
    constructor(nome, tipo)
    {
        super(nome, tipo); //chama o construtor da PAI e informa o que quer puxar da PAI
        this.nome = nome;
        this.tipo = tipo;
    }

    late()
    {
        console.log(`${this.nome} é um  animal ${this.tipo} e emite latidos`)
    }
}

class Gato extends Animal
{
    constructor(nome, tipo)
    {
        super(nome, tipo); //chama o construtor da PAI e informa o que quer puxar da PAI
        this.nome = nome;
        this.tipo = tipo;
    }

    mia()
    {
        console.log(`${this.nome} é um  animal ${this.tipo} e emite miados`)
    }
}

class Urso extends Animal
{
    constructor(nome, tipo)
    {
        super(nome, tipo); //chama o construtor da PAI e informa o que quer puxar da PAI
        this.nome = nome;
        this.tipo = tipo;
    }

    ruge()
    {
        console.log(`${this.nome} é um  animal ${this.tipo} e emite rugidos`)
    }
}

const tiranossauro = new Cachorro (`Tiranossauro`, `cachorro`);
const mingau = new Gato (`Mingau`, `gato`);
const marsha = new Urso (`Marsha`, `urso`);

tiranossauro.som(); //herdado do Animal (classe pai). Saída: o cachorro Rex faz um som.
tiranossauro.late(); //método somente da filha. Saída: Rex é um animal do tipo cachorro e emite um som latir.

mingau.som();
mingau.mia();

marsha.som();
marsha.ruge();

