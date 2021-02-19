//função que leva um numero ao quadrado
//se precisar disso em situação real, use a função propria, use Math.pow() ou operador **

function quadrado(n) {
    return n * n
}

console.log(quadrado(9))

// Caracteristicas da função acima:
//  1) Apenas um parâmetro
//  2) Apenas uma linha de código, com return
//  3) CANDIDATA PERFEITA A VIRAR ARROW FUNCTION

//  Transformando em arrow function
//  a) Não precisa de parênteses envolvendo o parâmetro
//  b) A palavra function e substituida pelo sinal =>, DEPOIS do parâmetro
//  c) Não são necessarias as chaves nem a palavra return

const quadrado2 = n => n * n
console.log(quadrado2(9))

//Função com mais de um parâmetro

function potencia(b, e) {
    return b ** e
}

console.log(potencia(2, 8))

const potencia2 = (b, e) => {
    return b ** e
}

console.log(potencia2(2, 8))

// Função sem parâmetro

function megasena() {
    return Math.floor((Math.random() * 60) + 1)
}

console.log(megasena(), megasena(), megasena(), megasena(), megasena())

function somaVet(vet) {
    let soma = 0
    for (let n of vet) soma += n
    return soma
}

console.log(somaVet([1,2,3]))

const somaVet2 = (vet) => {
    let soma = 0
    for (let n of vet) soma += n
    return soma
}

console.log(somaVet2([1,2,3,4]))


