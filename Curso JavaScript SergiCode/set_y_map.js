// SET Y MAPS
// Set Elimina los elementos repetidos
/*
let conjunto = new Set(['Pedro', 'Ricardo', 'Maria'])

console.log(conjunto)

let conjunto1 = new Set(['Pedro', 'Ricardo', 'Maria', 'Pedro', 'Pedro', 'Maria'])

console.log(conjunto1)

// Con .add se agrega
conjunto1.add('Jorge')

console.log(conjunto1)

let pregunta = conjunto1.has('Jorge')
console.log(pregunta)

let tamaño = conjunto1.size
console.log(tamaño)


let array = ['Cama', 'Armario', 'Escritorio', 'Cama', 'Estante', 'Mesita de Luz']

function comprar(muebles){
    console.log(muebles)
}

function comprarSoloUnaUnidad(muebles){
    let unicaUnidad = new Set(muebles)
    console.log(unicaUnidad)
}

comprar(array)
comprarSoloUnaUnidad(array)


// USO DE MAP

let mapa = new Map([
    ['Computadoras', 10],
    ['Tablets', 5],
    ['Celulares', 15]
])

console.log(mapa)

// Para Agregar usamos .set
mapa.set('Teclados', 20)
console.log(mapa)

// Para Borrar usamos .delete
mapa.delete('Computadoras')
console.log(mapa)

// para saber el tamaño usamos .size
console.log(mapa.size)

// para saber el existe un elemento
console.log(mapa.has('Teclados'))

*/

// 
let array = [1,1,2,2,3,3,3,4,4,4]
let unico = new Set(array)

// usamos ... para crear un nuevo arreglo con los valores unicos
let newArray = [...unico]
console.log(newArray)