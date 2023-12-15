const prompt = require('prompt-sync')();

const NUMEROS = "0123456789";
const LETRASMAIUSCULAS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LETRASMINUSCULAS = "abcdefghijklmnopqrstuvwxyz";
const CARACTERESESPECIAIS = "!@#$%¨&*()\"-_+=§{[ª}]º;:?/°|\\'.,<>*ãõáàéèíìóòúùç¬ü£¢";



let nomeCompleto = prompt("Informe seu nome: ");
let dataNascimento = prompt("Informe sua data de nascimento: ");
let senha = prompt("Informe uma senha: ");

let temNumero = verificarNumeros (NUMEROS,senha);
let temMaiuscula = verificarLetrasMaiusculas (LETRASMAIUSCULAS, senha);
let temMinuscula = verificarLetraMinuscula (LETRASMINUSCULAS, senha);
let temCaractere = verificarCaractere (CARACTERESESPECIAIS, senha);
let temNome = verificarNome(senha, nomeCompleto);
let temDataNascimento = verificarDataNascimento (senha, dataNascimento);

if (((temNumero + temMaiuscula + temMinuscula + temCaractere) >=2) && (senha.length >= 8) && (!temNome) && (!temDataNascimento)){
    console.log("Senha válida");
}else{
    console.log("Senha inválida");
}


function verificarNumeros (NUMEROS, senha){
    let temNumero = 0

    for (let indicesenha = 0; indicesenha < senha.length; indicesenha++){
        for (let indiceNumero = 0; indiceNumero < NUMEROS.length; indiceNumero++){
            if (senha.charAt(indicesenha) == NUMEROS.charAt(indiceNumero)) {
                temNumero = 1;
            }
        }
    }
    return temNumero
}

function verificarLetrasMaiusculas (LETRASMAIUSCULAS, senha){
    let temMaiuscula = 0

    for (let indicesenha = 0; indicesenha < senha.length; indicesenha++){
        for (let indiceMaiuscula = 0; indiceMaiuscula < LETRASMAIUSCULAS.length; indiceMaiuscula++){
            if (senha.charAt(indicesenha) == LETRASMAIUSCULAS.charAt(indiceMaiuscula)) {
                temMaiuscula = 1;
            }
        }
    }
    return temMaiuscula;
}

function verificarLetraMinuscula (LETRASMINUSCULAS, senha){
    let temMinuscula = 0
    

    for (let indicesenha = 0; indicesenha < senha.length; indicesenha++){
        for (let indiceMinuscula = 0; indiceMinuscula < LETRASMINUSCULAS.length; indiceMinuscula++){
            if (senha.charAt(indicesenha) == LETRASMINUSCULAS.charAt(indiceMinuscula)) {
                temMinuscula = 1;
            }
        }
    }
    return temMinuscula;
}

function verificarCaractere (CARACTERESESPECIAIS, senha){
    let temCaractere = 0

    for (let indicesenha = 0; indicesenha < senha.length; indicesenha++){
        for (let indiceCaractere = 0; indiceCaractere < CARACTERESESPECIAIS.length; indiceCaractere++){
            if (senha.charAt(indicesenha) == CARACTERESESPECIAIS.charAt(indiceCaractere)) {
                temCaractere = 1;
            }
        }
    }
    return temCaractere;
}

function verificarNome (senha, nomeCompleto){

    let temNome = false
    nomeCompleto = nomeCompleto.toLowerCase().split(" ");

    for (let indiceNome = 0; indiceNome < nomeCompleto.length; indiceNome++){
        if(senha.toLowerCase().includes(nomeCompleto[indiceNome])){
            temNome = true;
        }
        
    }
    return temNome; 
}

function verificarDataNascimento (senha, dataNascimento){

    let temDataNascimento = false
    dataNascimento = dataNascimento.split("/");

    for (let indiceDataNascimento = 0; indiceDataNascimento < dataNascimento.length; indiceDataNascimento++){
        if(senha.includes(dataNascimento[indiceDataNascimento])){
            temDataNascimento = true;
        }
        else if (dataNascimento[2].slice(2,3)){
            temDataNascimento = true;
        }
    }
    return temDataNascimento; 
}

function verificarCaractereRepetido (senha){

    let temRepeticao = false

    for()
  

    return temRepeticao; 
}