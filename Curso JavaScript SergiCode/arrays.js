// Arrays y listas
// Los arrays se definen entre []
// SE RECOMIENDA USAR LET, para los ejemplos usaremos CONST

const array = ['Curso HTML', 'Curso CSS', 'Curso JS']

//console.log(array)

// Otra forma de inicializar a un array indicando la cantidad de elementos a contener

const array1 = new Array(5)

// para ir llenando se va indicando el indice, comenzando por 0
array1[0] = 'Curso HTML'
array1[1] = 'Curso CSS'
array1[2] = 'Curso JS'
array1[3] = 'Curso RPG'
array1[4] = 'Curso PHP'

//console.log(array1)

// para ver el tamaño del arreglo
//console.log(array1.length)

// mostramos el arreglo en la web
//document.getElementById('seleccionable').innerHTML = array1

// Para ordenar usamos sort()
const arraySort = [9,5,2,7,1]
//console.log(arraySort.sort())

const arraySortStr = ['Flauta', 'Arpa', 'Xilofono', 'Guitarra', 'Acordeon']
//console.log(arraySortStr.sort())

// Acceder al utimo elento se utliza [length - 1]
//console.log(arraySortStr[arraySortStr.length - 1])

// recorrer ek array
const arrayLi = ['Despertarse', 'Comer', 'Estudiar', 'Dormir']

let texto = ''
for (let index = 0; index < arrayLi.length; index++) {

    // concateamos lo que queremos mostrar en la lista en index.html
    texto += "<li>" + arrayLi[index] + "</li>";
    
}
//document.getElementById("seleccionableLi").innerHTML = texto

// Otros metodos de array
// array.filter(valor)                              --> filtra todos lo que cumplen con el valor
//      .map(valormapera -> valorporelquecambiar) 
//      .fill(posicion, valor)                      --> rellena desde la posicion con valor
//      .find(valor)                                --> devuelve el primer elemento que cumple con valor
//      .findIndexOf(valor)                         --> devuelve la posición del primer elemento que cumple con valor
//      .some(valor)                                --> devuelve true si encuentra el valor
//      .every(valor)                               --> devuelve true si todos los elementos del array son = a valor
//      .pop()                                      --> elimina el ultimo elemento
//      .shift()                                    --> elimina el primer elemento
//      .push(valor)                                --> agrega elemento al array

let arrayFrutas = ['Manzanas', 'Peras', 'Platanos', 'Naranjas', 'Manzanas', 'Naranjass']

const resultadoFilter = arrayFrutas.filter(x => x == 'Manzanas')
//console.log(resultadoFilter) // muestra [ 'Manzanas', 'Manzanas' ]


let arrayObjeto = [
    {nombre: "Pedro", apellido:"Gonzalez"},
    {nombre: "Maria", apellido:"Gonzalez"},
    {nombre: "Lucia", apellido:"Gonzalez"},
    {nombre: "Ricardo", apellido:"Perez"},
    {nombre: "Glotis", apellido:"Juarez"},
    {nombre: "Fernanda", apellido:"Fernandez"}
]
const resultadoFilterObjeto = arrayObjeto.filter(x => x.apellido == 'Gonzalez')

// recorremos el arreglo resultante de filter
for (let index = 0; index < resultadoFilterObjeto.length; index++) {
    const element = resultadoFilterObjeto[index];
    //console.log(element.nombre)
    
}

// uso de map
const arrayMap = ['Manzana', 'Manzana', 'Manzana', 'Manzana']

//console.log('Antes de Map --> ' + arrayMap)
const resultadoMap = arrayMap.map(x => {
    if (x == 'Manzana') return 'Naranja'
})
//console.log('Después de Map --> ' + resultadoMap)

// Uso de fill
const arrayFill = ['Manzana', 'Manzana', 'Manzana', 'Manzana']
const resultadoFill = arrayFill.fill('Naranja', 1)
console.log('Uso fill')
console.log(resultadoFill)

// Uso find y findIndex, some
const arrayFind = ['Manzana', 'Manzana', 'Manzana', 'Manzana', 'Pera', 'Manzana', 'Pera']
const resultadoFind = arrayFind.find(x => x == 'Pera')
console.log(resultadoFind)

const resultadoFindIndexOf = arrayFind.findIndex(x => x == 'Pera')
console.log(resultadoFindIndexOf)

const resultadoSome = arrayFind.some(x => x == 'Pera')
console.log(resultadoSome)

const resultadoEvery = arrayFind.every(x => x == 'Manzana')
console.log(resultadoEvery) // Devuelve false porque no todos los elementos son Manzana

const arrayPop = ['Manzana', 'Naranja', 'Limón', 'Pera']

const resultadoPop = arrayPop.pop() // Quita el ultimo elemento
console.log(resultadoPop) // devuelve Pera
console.log(arrayPop) // Devuelve el arreglo sin el ultimo elemento sacado Pera

const resultadoShit = arrayPop.shift() // Quita el primer elemento
console.log(resultadoShit) // devuelve Pera
console.log(arrayPop) // Devuelve el arreglo sin el ultimo elemento sacado Pera

const resultadoPush = arrayPop.push('Ciruela') // Quita el primer elemento
console.log(resultadoPush) // devuelve Pera
console.log(arrayPop) // Devuelve el arreglo sin el ultimo elemento sacado Pera

const resultadoUnShit = arrayPop.unshift('Damasco') // agrega al inicio del array
console.log(resultadoUnShit) // devuelve Pera
console.log(arrayPop) // Devuelve el arreglo sin el ultimo elemento sacado Pera

const resultadoSplice = arrayPop.splice(2, 1, 'Durzando') // reemplaza desde la posicion, la cantidad de elementos por el valor nuevo
console.log(resultadoSplice) // 
console.log(arrayPop) //

const resultadoSlice = arrayPop.slice(2, 4) // solo recupera desde la posicion la cantidad de elementos
console.log(resultadoSlice) // 
console.log(arrayPop) //

// uso join
const arrayJoin =  ['Manzana', 'Naranja', 'Limón', 'Pera', 'Ciruela', 'Kiwi']
document.getElementById('seleccionable').innerHTML = arrayJoin.join(', Fruta : ')

// uso concat
const frutas =  ['Manzana', 'Naranja', 'Limón', 'Pera', 'Ciruela', 'Kiwi']
const verduras = ['Lechuga', 'Cebolla', 'Zapallo', 'Brocoli']
console.log(frutas.concat(verduras))

// Sort ordenando numeros
const arrsortNum = [1, 2,3,4,5,6,7,8,9,10,11,12,13,14,15]
console.log(arrsortNum.sort((x,y) => x-y)) // es la forma de ordenar correctamente un arreglo de numeros de forma ascendente  --> x-y
console.log(arrsortNum.sort((x,y) => y-x)) // es la forma de ordenar correctamente un arreglo de numeros de forma descendente --> y-x

const arrAutos = [
    {marca:'FIAT', ano:2020},
    {marca:'BMW', ano:2019},
    {marca:'RENAUL', ano:2021},
    {marca:'FORD', ano:2023}
]
console.log(arrAutos.sort((x,y) => x.ano-y.ano)) // es la forma de ordenar correctamente un arreglo de numeros de forma ascendente  --> x-y