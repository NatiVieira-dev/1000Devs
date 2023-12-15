// ------------- Exercícios ---------------

//classe de veículos
class Veiculos
{
    constructor(marca, modelo, ano)
    {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    dirigir()
    {
        console.log(`O veículo da marca ${this.marca}, do modelo ${this.modelo}, de ano ${this.ano}, está pronto para ser dirigido.`)
    }
}

const carro = new Veiculos(`Fiat`, `UNO`, `2015`);
const moto = new Veiculos(`Honda`, `CG`, `2019`);
const caminhao = new Veiculos(`Scania`, `Linha L`, `2023`);

carro.dirigir();
moto.dirigir();
caminhao.dirigir();


//sistema bancário
class ContaBancaria
{
    constructor(nomeCliente, tipoConta)
    {
        this.nomeCliente = nomeCliente;
        this.tipoConta = tipoConta;
    }

    deposito()
    {
        console.log(`${this.nome}, você irá depositar em sua conta ${this.tipoConta}. Confirma?`)
    }

    saque()
    {
        console.log(`${this.nome}, você irá sacar de sua conta ${this.tipoConta}. Confirma?`)
    }

    saldo()
    {
        console.log(`${this.nome}, você irá verificar o saldo de sua conta ${this.tipoConta}. Confirma?`)
    }
}

const cliente1 = new ContaBancaria(`Maria`, `Corrente`);
const cliente2 = new ContaBancaria(`Mário`, `Poupança`);
const cliente3 = new ContaBancaria(`Martin`, `Universitária`);

cliente1.deposito();
cliente2.saque();
cliente3.saldo();


//agenda de contatos
class Contato
{
    constructor(nome, sobrenome, telefone)
    {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.telefone = telefone;
    }

    adicionar()
    {
        console.log(`Você irá associar o telefone ${this.telefone} à ${this.nome, this.sobrenome}. Confirma?`)
    }

    editar()
    {
        console.log(`Você pretende modificar o telefone de ${this.nome, this.sobrenome} pelo informado?`)
    }

    excluir()
    {
        console.log(`Você está prestes a excluir o contato de ${this.nome, this.sobrenome}. Confirma?`)
    }
}

const contato1 = new Contato (`Victor`, `Meireles`, `(48) 9-9986-7548`);

contato1.adicionar();
contato1.editar();
contato1.excluir();


//gerenciador de tarefas
class Tarefas
{
    constructor(titulo, descricao, dataLimite)
    {
        this.titulo = titulo;
        this.descricao = descricao;
        this.dataLimite = dataLimite;
    }

    adicionar()
    {
        console.log(`Confirme para adicionar à tarefa ${this.titulo} a descrição: ${this.descricao}; e a data limite de ${this.dataLimite}`)
    }

    remover()
    {
        console.log(`Você está prestes a remover a tarefa ${this.titulo}: ${this.descricao}, com data limite de ${this.dataLimite} da sua lista. Confirma?`)
    }

    listar()
    {
        prompt(`Informe a que lista pretende sincronizar a tarefa ${this.titulo}: `);

        console.log(`A tarefa ${this.titulo} de descrição "${this.descricao}" e data limite ${this.dataLimite}, foi adicionada a esta lista.`)
    }
}

const gerenciadorTarefas = new Tarefas (`cozinha`, `lavar louça e varrer o chão`, `hoje`)

gerenciadorTarefas.adicionar();
gerenciadorTarefas.remover();
gerenciadorTarefas.listar();


