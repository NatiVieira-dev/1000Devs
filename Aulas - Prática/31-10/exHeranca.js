// ------------- Exercícios ---------------

//classe de veículos
class Veiculos
{
    constructor(marca, modelo)
    {
        this.marca = marca;
        this.modelo = modelo;
    }

    acelerar()
    {
        console.log(`O veículo da marca ${this.marca}, do modelo ${this.modelo}, está acelerando.`);
    }
}

//classes filhas
class Carro extends Veiculos
{
    constructor(marca, modelo, ano, portas)
    {
        super(marca, modelo);
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.portas = portas;
    }

    acelerar()
    {
        console.log(`O carro da marca ${this.marca}, do modelo ${this.modelo}, do ano ${this.ano} e de ${this.portas} portas, está acelerando.`);
    }

    ligarAr()
    {
        console.log(`Ar-condicionado ligado!`);
    }
}

class Moto extends Veiculos
{
    constructor(marca, modelo, cilindradas)
    {
        super(marca, modelo);
        this.marca = marca;
        this.modelo = modelo;
        this.cilindradas = cilindradas;
    }

    acelerar()
    {
        console.log(`A moto da marca ${this.marca}, do modelo ${this.modelo}, de ${this.cilindradas} cilindradas, está acelerando.`);
    }

    ligarFarol()
    {
        console.log(`Farol ligado!`);
    }
}

class Bicicleta extends Veiculos
{
    constructor(marca, modelo)
    {
        super(marca, modelo);
        this.marca = marca;
        this.modelo = modelo;
    }

    acelerar()
    {
        console.log(`A bicicleta da marca ${this.marca}, do modelo ${this.modelo}, irá acelerar conforme você pedalar.`);
    }

    pedalar()
    {
        console.log(`Pedale mais forte se quiser mais velocidade!`);
    }
}

//criar objetos
const carroTesteDrive = new Carro(`Ford`, `Fiesta Sedan`, `2012`, `4`);
const motoTesteDrive = new Moto(`Suzuki`, `Padrão`, `150`);
const bicicletaTesteDrive = new Bicicleta(`Da melhor`, `O mais novo`);

carroTesteDrive.acelerar();
carroTesteDrive.ligarAr();
console.log();
motoTesteDrive.acelerar();
motoTesteDrive.ligarFarol();
console.log();
bicicletaTesteDrive.acelerar();
bicicletaTesteDrive.pedalar();