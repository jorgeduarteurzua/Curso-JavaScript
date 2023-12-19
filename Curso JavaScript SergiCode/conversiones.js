// Conversiones

// String a numero
let a = Number('3.13')

console.log(a)
console.log(typeof a)

// String a Entero
let b = parseInt('3.13')

console.log(b)
console.log(typeof b)

// String a Float o Decimal
let c = parseFloat('3.13')

console.log(c)
console.log(typeof c)

// Otra forma de convertir a Number
let d = +'10'

console.log(d)
console.log(typeof d)


// Numero a String

let e = String(1)

console.log(e)
console.log(typeof e)

let f = 1
let g = f.toString()

console.log(g)
console.log(typeof g)

// Date a Number

let h = new Date()
let h1 = Number(h)  // devuelve en milisegundos

console.log(h1)
console.log(typeof h1)

// Data a String

let i = new Date()
let j = String(i)

console.log(j)
console.log(typeof j)

// number a boolean

let k = Boolean(0)
let l = Boolean(1)

console.log(k)
console.log(typeof k)

console.log(l)
console.log(typeof l)

// Otra forma de consulta de forma boolean

let ricardo = 0

// se evalua si tiene dato siempr y cuado sea distinto de 0, si se desea que entre como dato se debe condicionar en el IF agregando la 
// condicion de igualdad
if (ricardo || ricardo == 0) {
    console.log('LLego un dato')
} else {
    console.log('No vieene Dato')
}