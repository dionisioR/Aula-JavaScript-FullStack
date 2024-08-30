// REGEXP

// Expressão regular
// É um padrão que especifica um conjunto de strings de caracteres, que ela corresponde a determindas strings em um texto.
// O objeto RegExp representa uma expressão regular, um padrão
// Pode ser declarada de forma literal e por contrutor

// Uso de expressão regular em:
// Testar o padrão (método RegExp.test())
// Pesquisar em strings (método RegExp.exec()) - retorna um Array
// Extração de dados
// Substituição de caracteres
// Validação de dados
// Mascara em campos (CPF, telefonesm email, cartão de crédito, etc)

let stringTeste = "Um exemplo de string para estudarmos JS (JavaScript)"
let regexLiteral = /JS/
console.log(regexLiteral.test(stringTeste)) // true
console.log(regexLiteral.exec(stringTeste))
console.log('---------------------')
regexLiteral = /js/
console.log(regexLiteral.test(stringTeste)) // false
console.log(regexLiteral.exec(stringTeste)) // null
console.log('---------------------')

let regexConstrutor = new RegExp('JS')
console.log(regexConstrutor.test(stringTeste)) // true
console.log(regexConstrutor.exec(stringTeste))
console.log('----------------------')
regexConstrutor = new RegExp('js')
console.log(regexConstrutor.test(stringTeste)) // false
console.log(regexConstrutor.exec(stringTeste)) // null
