// Uso MATH

console.log(Math.PI)
console.log(Math.E)
console.log(Math.SQRT2)
console.log(Math.SQRT1_2)
console.log(Math.LN2)
console.log(Math.LN10)
console.log(Math.LOG2E)
console.log(Math.LOG10E)

// round redondea hacia abajo o hacia arriba según sea el caso dese .50 hacia arriba
const numero = 2.2
const redondeo = Math.round(numero)
console.log(redondeo)

// ceil siempre redondea hacia arriba
const numero2 = 2.1
const redondeo2 = Math.ceil(numero2)
console.log(redondeo2)

// floor siempre redondea hacia abajo
const numero3 = 2.9
const redondeo3 = Math.floor(numero3)
console.log(redondeo3)

// trunc siempre mantiene la parte entera, elimina los decimales
const numero4 = 12.9
const redondeo4 = Math.trunc(numero4)
console.log(redondeo4)

// uso random
let numero5 = Math.random() * 100 // generamos un numero entre 0 y 100
let redondeo5 = Math.round(numero5)
console.log(redondeo5)