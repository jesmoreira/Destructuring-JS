const numerosPares = [2, 4, 6]
const numerosImpares = [1, 3, 5]

const numeros = [...numerosPares, ...numerosImpares]

const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5]

//const [nome1 = 'jess'] = [1]

const pessoa = {
    nome: 'Jess',
    idade: 25
}

const pessoaComNumero = {...pessoa, telefone: 919982536}

const {nome} = pessoa

function imprimeDados ({nome, idade}) {
    console.log(nome, idade)
}

imprimeDados(pessoa)