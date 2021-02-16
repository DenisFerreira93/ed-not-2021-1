//função que leva um numero ao quadrado
//se precisar disso em situação real, use a função propria, use Math.pow() ou operador **

function quadrado(n){
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