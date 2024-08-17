let flag = false
console.log(flag, typeof flag)

flag = true
console.log(flag, typeof flag)

console.log('----------------------')

if(flag == true){
    console.log('Enviar e-mail')
}else{
    console.log('Ativar conta')
}
console.log('----------------------')


console.log(flag)
console.log(!flag)
console.log(!!flag)
console.log('----------------------')

let nome = 'RD3W'
console.log(nome)
console.log(!nome)
console.log(!!nome)

console.log('----------------------')

let vazio = ''
console.log(vazio)
console.log(!vazio)
console.log(!!vazio)

console.log('----------------------')

// sempre serão considerados falsos
console.log(!! '')
console.log(!! 0)
console.log(!! -0)
console.log(!! null)
console.log(!! undefined)
console.log(!! NaN)
console.log('----------------------')

// são considerados verdadeiros
console.log(!! Array)
console.log(!! Object)
console.log(!! Function)