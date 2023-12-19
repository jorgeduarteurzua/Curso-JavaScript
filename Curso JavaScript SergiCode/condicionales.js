// condicional

let edadChico = 19

if (edadChico >= 18) {
    console.log("Es mayor de Edad y puede entrar al Boliche")
} else {
    console.log("Es menor de Edad y NO puede entrar al Boliche")
}

// Uso de AND (&&)
let edadPersona = 18
if (edadPersona >= 18 && edadPersona <= 60) {
    console.log("Puede entrar al Boliche")
} else if (edadPersona <= 18) {
    console.log("Es menor de Edad y NO puede entrar al Boliche")
} else {
    console.log("No se recomienda ingresar al Boliche porque ere mayor")
}

// Uso de switch
let estiloDeMusica = 'Punk'

switch (estiloDeMusica) {
    case 'Punk':
        console.log('Te recomiendo Los Ramones')
        break;
    case 'Hard Rock':
        console.log('Te recomiendo Guns N Roses')
        break;
    case 'Metal':
        console.log('Te recomiendo Los Panteras')
        break;
    case 'Rock and Roll':
        console.log('Te recomiendo Elvis Presley')
        break;
    case 'Pop':
        console.log('Te recomiendo Michael Jackson')
        break;
    default:
        console.log('Tu seleccion de musica es pobre')
        break;
}

// IF Anidados
let nacionalidad = 'Chileno'
let tienePasaporte = true

if (edadPersona >= 18){
    console.log('Tienes Edad para Viajar')
    if (nacionalidad == 'Chileno'){
        console.log('La documentacion esta correcta, Tramite 1')
        if (tienePasaporte){
            console.log('Usted puede viajar, buen viaje')
        } else{
            console.log('No tienes pasaporte, NO puedes viajar')
        }
    } else{
        console.log('Debes presentar la documentación de tu país de origen')
    }
}else{
    console.log('Debes ser mayor de Edad para poder Viajar')
}