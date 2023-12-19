/*
// uso typeof

let a = typeof('Jorge')

console.log(a)

let b = typeof 3.13
console.log(b)

// caso especial

let c = typeof NaN
console.log(c)

// boolean

let d = typeof true
console.log(d)

// array, nos devuelve object
let e = typeof ['Pedro', 'Maria']
console.log(e)

// objeto
let f = typeof {curso : 'JavaScript'}
console.log(f)

// OBJETO CASO ESPECIAL todas las definicione con new devolvera object
let g = typeof new Date()
console.log(g)

// function
let h = typeof function(){}
console.log(h)

// undefined
let i = typeof SergieCode
console.log(i)

// caso especial null, devuelve object
let j = typeof null
console.log(j)

// 
let datoQueVieneDeBackend = 'Curso JavaScript'
// verificamos que es de tipo string
if (typeof datoQueVieneDeBackend === 'string'){
    console.log('Lo que viene del backend es String')
} else{
    console.log('Reclama a tu compañero que te mande un String')
}
*/

// Uso de instanceof
let a = typeof {curso : 'JavaScript'}
let b = typeof ['Ricardo', 'Maria', 'Juan']
let c = typeof new Date()
let d = typeof null

let e = [1,2,3,4,5]
let f = new Date()
let g = new Set()
let h = new Map()
let i = null // No se puede usar para instanceOf ya que no es un objeto, dara error

console.log(e instanceof Array) // devolvera true
console.log(f instanceof Array) // devolvera false

if (e instanceof Array) {
    console.log('Gracias Backend por enviar el Array')
} else{
    console.log('Backend envíame un Array')
}

if (f instanceof Date) {
    console.log('Gracias Backend por enviar un Date')
} else{
    console.log('Backend envíame un Date')
}

if (g instanceof Set) {
    console.log('Gracias Backend por enviar un Set')
} else{
    console.log('Backend envíame un Set')
}