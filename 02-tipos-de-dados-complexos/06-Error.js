// ERRO (Objeto para lançar um erro)

// Durante a execução de uma aplicação pode ocorrer erro, no qual devem ser informados e por consequência tratados

// Um erro pode ser lançado pelo interpretador JavaScript, ou mesmo fazer uso da instrução 'throw' para informar uma exceção excepcional a ser tratada.

// O tratamento de erros e exceções são tratados por um bloco try/catch/finaly.

// A classe Error tem varias subcategoria de error, no qual o objeto Error disparado possui uma propriedade 'name', com tipo de erro e outra chamada 'message' com mais informações sobre o error.

// Após ocorrer um error o interpretador JavaScript irá para a execução de imediato.

console.log('Linha 01')
// throw new Error("Ocorreu um erro....!!!")
console.log('Linha 03')

try {
    console.log(soma(5,7))
} catch (error) {
    // console.log(error)
    console.log('name: ', error.name)
    console.log('message: ', error.message)
    console.log('stack: ',error.stack)
}finally{
    console.log('Bloco finaly')
    console.log('Sempre será executado')
}