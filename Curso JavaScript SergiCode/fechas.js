// Fechas

const fecha = new Date()

console.log(fecha)

// Poner la fecha en formato AAAA-MM-DD
const fecha1 = new Date("2021-10-29")

console.log(fecha1)

// extraer el año 
let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const fecha2 = new Date()

console.log(fecha2.getFullYear()) // extrae el Año
console.log(fecha2.getMonth()) // extrae el numero del mes, y le resta 1 al mes, si estamos en Octubre(10), devuelve 9
console.log(meses[fecha2.getMonth()]) // Mostramos el Nombre del Mes

const resultadoFecha = fecha2.getDate() + ' ' + meses[fecha2.getMonth()] + ' ' + fecha2.getFullYear()
console.log(resultadoFecha)

// para cambiar valores usamos set
fecha.setDate(15) // cambiamos el dia a 15
fecha.setFullYear(2029) // cambiamos el año a 2029
fecha.setMonth(11) // cambiamos el mes a Diciembre

const resultadoFecha2 = fecha.getDate() + ' ' + meses[fecha.getMonth()] + ' ' + fecha.getFullYear()
console.log(resultadoFecha2)