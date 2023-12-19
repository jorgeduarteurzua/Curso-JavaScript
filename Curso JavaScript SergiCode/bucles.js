// Arrays y Bucles

let tecnologias = ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'ANGULAR']

/*
let seleccionable = document.getElementById('seleccionable')
let texto = ''
// Uso for clasico
for (let index = 0; index < tecnologias.length; index++) {
    texto += tecnologias[index];
    if (index < tecnologias.length -1){
        texto +=  ', '
    } 

    seleccionable.textContent = texto;
    
}

// uso for of

for (tecnologia of tecnologias) {
    console.log(tecnologia)
}

// uso for in pra recorrer objetos
const alumno = {
    nombre : 'Jorge',
    edad : 51,
    texnologias : ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'ANGULAR']
}

for (const clave in alumno) {
    console.log(alumno[clave])
}

// Uso For Each

let numeros = [1,2,3,4,5,6,7,8,9]
numeros.forEach(numero => {
    console.log(numero)
});


// USO WHILE

let edad = 0;
while (edad < 18){
    console.log(`Tienes ${edad} años y aún eres un niño`)
    edad++
}
*/

// Uso Do While

let edad = 0;
do{
    {
    console.log(`Tienes ${edad} años y aún eres un niño`)
    edad++
    }
} while (edad < 18)

console.log(`Tienes ${edad} ya eres Mayor de Edad`)