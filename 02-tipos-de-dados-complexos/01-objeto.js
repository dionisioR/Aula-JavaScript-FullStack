// Objeto

// É o tipo fundamental base do JavaScript
// Um objeto é composto de pares de chaves e valor
// As propriedades de um objeto não são tipadas, ou seja, pode conter diferentes tipos de dados: string, number, boolean, array, function, objects...
// Um objeto pode ser cirado através de valores literais ou através de seu construtor 'new Object() '

// Literal
let itens = {}
let itens_2 = {nome:'refrigerante', preco: 8.50, ativo:true, detalhes:{detalhe:'...'}}
console.log(itens)
console.log(itens_2)
console.log('------------------')

// Construtor
let pessoa = new Object()
pessoa.nome = 'João'
pessoa.idade = 30
pessoa['sexo'] = 'masculino'
console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa['nome'])
console.log(pessoa.idade)
console.log(pessoa['idade'])
console.log(pessoa.sexo)
console.log(pessoa['sexo'])