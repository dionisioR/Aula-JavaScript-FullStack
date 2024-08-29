// Function

// Tipo de dado 'Objeto complexo' tipo referência

// É um bloco de código JavaScript definido uma vez
// Pode ser chamado ou invocado a qualquer momento
// Pode ser chamado para execução várias vezes
// Pode aceitar parâmetros
// Pode retornar valores

// Declaração de função
function exibirMensagem(mesagem){
    console.log(mesagem)
}
// Chamando a função
exibirMensagem('Olá, mundo!')
console.log('------------------')

// Função anônima
let exibirMensagem_2 = function(mesagem){
    console.log(mesagem)
}
// Chamando a função
exibirMensagem_2('Olá, mundo!')
console.log('------------------')

// Arrow function
let exibirMensagem_3 = (mesagem) => {
    console.log(mesagem)
}
// Chamando a função
exibirMensagem_3('Olá, mundo!')
console.log('------------------')

// Função com retorno
function soma(a, b){
    return a + b
}
// Chamando a função
let resultado = soma(10, 20)
console.log(resultado)
console.log('------------------')


