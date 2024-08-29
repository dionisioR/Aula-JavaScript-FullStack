// Tipo de dado 'Objeto Complexo' tipo referência

// É um conjunto ordenado de valores
// Cada valor de um array é considerado um único MediaElementAudioSourceNode, que tem uma posição numérica no array, no qual chamamos de índice
// Os elementos de um array não são tipados, ou seja, um array pode conter diferentes tipos de dados em seus elementos: String, number, boolean, array, function, object...
// Array podem ser criados através de valores literais ou através de seu construtor 'new Array()'

// Literal
let carros = ['Gol', 'Palio', 'Uno', 'Celta', {nome:'RD3W'}]
console.log(carros)
console.log(carros[0])
console.log(carros[2])
console.log(carros[3])
console.log(carros[1])
console.log(carros[1].nome)
console.log(carros[9999])
console.log(carros[4])
console.log(carros[4].nome)
console.log('---------------------')

// Construtor
let carros_2 = new Array('Gol', 'Palio', 'Uno', 'Celta', {nome:'RD3W'})
console.log(carros_2)
console.log(carros_2[0])
console.log(carros_2[1])
console.log(carros_2[3])
console.log(carros_2[2])
console.log(carros_2[2].nome)
console.log(carros_2[9999])
console.log(carros_2[4])
console.log(carros_2[4].nome)
