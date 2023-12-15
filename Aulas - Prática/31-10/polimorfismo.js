
//classe pai
class Animal
{
    constructor(nome)
    {
        this.nome  = nome;
    }

    fazerSom()
    {
        console.log(`O animal faz um som genérico.`);
    }

}

//classe filhas
class Cachorro extends Animal //
{
    constructor(nome)
    {
        super(nome);
    }

    fazerSom()
    {
        console.log(`O cachorro late`);
    }
}

class Gato extends Animal
{
    constructor(nome)
    {
        super(nome);
    }

    fazerSom()
    {
        console.log(`O gato mia.`);
    }
}

//função para interagir com animal
function interagirComAnimal(animal)
{
    console.log(`Meu animal ${animal.nome} faz o seguinte som`);
    
    animal.fazerSom();
}

//criar objetos dos diferentes animais

const tiranossauro = new Cachorro(`Tiranossauro`);
const mingau = new Gato (`Mingau`);

//Interagindo com os animais e chamar o método fazerSom
interagirComAnimal(tiranossauro); // vai retornar "meu animal Tiranossauro faz o seguinte som: o cachorro late"
interagirComAnimal(mingau); // faz o mesmo

