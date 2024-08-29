// DATE

// Tipo de dado 'objeto complexo' tipo referência

// Representa data e/ou hora
// Date não tem sintaxe literal, deve ser instanciado com o operador 'new Date()'
// Objetos Date são baseados no valor de tempo que é o número de milissegundos desde 1 de janeiro de 1970 UTC (Tempo Universal Coordenado)

// Representações:

// new Date() - Data e hora atual - Retorna um object Date
// new Date(valor) - valor inteiro em milissegundos com base em 01/01/1970
// new Date(dataString) - data e hora em formato de string - YYYY-MM-DDTH:mm:ss.sssZ
// new Date(ano, mês, dia, hora, minuto, segundo, milissegundo) - data e hora em formato de número

let data = new Date()
console.log(data)
console.log(typeof data) // object
console.log('------------------')

let dataString = new Date('2024-08-29')
console.log(dataString)
console.log(typeof dataString) // object
console.log('Ano:', dataString.getFullYear())
console.log('Mês:', dataString.getMonth())
console.log('Mês + 1:', dataString.getMonth()+1)
console.log('Dia da semana:', dataString.getDay())
console.log('Dia do mês:', dataString.getDate())
console.log('---------------------------')
console.log('Hora:', data.getHours())
console.log('Minuto:', data.getMinutes())

console.log('---------------------------')
var dataParam = new Date(2024,8,29)
console.log(dataParam)
console.log('Ano: ',dataParam.getFullYear())
console.log('Mês: ',dataParam.getMonth())