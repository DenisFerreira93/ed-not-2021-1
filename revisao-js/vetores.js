
//  ESTRUTURA DE DADOS
//  AULA 01 - REVISÃO JAVASCRIPT
//  ASSUNTO: VETORES
//--------------------------------

let frutas = ['banana','maçã','laranja','limão','uva','pêra','mamão','melancia','morango']
let version = 0

//PRINT : LISTA DE FRUTAS INICIAL
console.table(`LISTA DE FRUTAS v.${version} : ${frutas}`)
version++

// POP = REMOVE o ÚLTIMO  elemento do vetor

console.table('----POP----')
let ultimaFruta = frutas.pop()
console.table(`\tÚltima Fruta = ${ultimaFruta}`)
console.table(`Frutas atualizadas v.${version} = ${frutas}`)
version++

// SHIFT = REMOVE o PRIMEIRO elemento do vetor
console.table('----SHIFT----')
let primeiraFruta = frutas.shift()
console.table(`\tPrimeira Fruta = ${primeiraFruta}`)
console.table(`Frutas atualizadas v.${version} = ${frutas}`)
version++

// SPLICE = REMOVE elemento INTERMEDIÁRIO - à escolha
// SPLICE(posicaoRemoção,quantidadeElementosRemover)
//console.table(`Frutas atualizadas v.${version} = ${frutas}`)
//version++

//cria prompt para input do usuário
const prompt = require('prompt');
//inicia o prompt
prompt.start();

// define properties schema
var schema = {
    properties: {
        removerFruta: {
            description: `Escolha uma fruta de 1-${frutas.length}`,
            pattern: /\d+/g,
            type: 'integer',
            message: 'Apenas valores inteiros serão aceitos',
            required: true
        }
    }
};

// pede input do usuário
prompt.get(schema, (err, result) => {
    if (err) {
        throw err;
    }
// print resultado
    console.table('----SPLICE----')
    let frutaIntermediaria = frutas.splice(result.removerFruta-1,1)
    console.table(`\tFruta selecionada para remoção: ${result.removerFruta} : ${frutaIntermediaria} `)
    console.table(`\tFruta removida: ${frutaIntermediaria}`)
    console.table(`Frutas atualizadas v.${version} = ${frutas}`)
    version++
    
    console.table('----UNSHIFT----')
    frutas.unshift('jaboticaba')
    console.table(`Frutas atualizadas v.${version} = ${frutas}`)
    version++

    console.table('----SPLICE INSERE UM ITEM----')
    frutas.splice(2,0,'melão') // posição, número de elementos a serem excluídos, valor inserido
    console.table(`Frutas atualizadas v.${version} = ${frutas}`)
    version++

    console.table('----SPLICE INSERE MÚLTIPLO ITENS----')
    frutas.splice(4,0,'pêssego','tangerina') // posição, número de elementos a serem excluídos, valor inserido
    console.table(`Frutas atualizadas v.${version} = ${frutas}`)
    version++

    console.table('----SPLICE SUBSTITUI ITENS----')
    frutas.splice(4,1,'ameixa',) // posição, número de elementos a serem excluídos, valor inserido
    console.table(`Frutas atualizadas v.${version} = ${frutas}`)
    version++

    console.log('------ ***************** ---------')
    console.log('------ ***************** ---------')
    console.log('------ LAÇOS DE REPETIÇÃO ---------')
    console.log('------ LAÇO   :   FOR ---------')

    //for tradicional
    for (let i = 0 ; i < frutas.length ; i++){
        console.log(`pos = ${i}, ${frutas[i]}`);
    }

    console.log('------ LAÇO   :   FOR INVERSO ---------')

    //for tradicional, em ordem inversa
    for (let i = frutas.length - 1 ; i>=0; i--){
        console.log(`pos = ${i}, ${frutas[i]}`);
    }

    // 3) Percurso com for...of
    // a) Sempre percorre o vetor inteiro, na ordem natural, sem necessidade de uma variável contadora
    //  Variaveis:
    //  f -> variável que recebera cada elemento do vetor (pode ser qq nome válido de variável)
    //  frutas -> é o vetor a ser percorrido
    for(let f of frutas){
        Console.log(f)
    }

     console.log('------ LAÇO   :   FOREACH ---------')

    // 4) Percurso com forEach()
    //forEach() recebe como parametro uma função que recebe como parametro
    //cada elemento do vetor
    //   O nome do parametro da função pode ser qq nome válido de identificador

    frutas.forEach(function(elemento){
        console.log(elemento)
    })

        console.log('------ LAÇO   :   FOREACH COM ARROW FUNCTION---------')

    frutas.forEach(elemento => console.log(elemento))