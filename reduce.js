/*
    REDUCE
     -Retorna um valor (pode ser um novo array, um objeto,string,number,etc)
     -Aceita 4 parametros
        -acumulador
        -valor atual
        -index
        -array completo
*/

const store = [10, 5, 7, 8, 19];
const sum = store.reduce(function(acumulador,valorAtual){
    return valorAtual + acumulador
})

console.log(sum)