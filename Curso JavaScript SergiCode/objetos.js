// Objetos

let auto1 = {
    marca : 'FIAT',
    modelo : 'UNO',
    peso : 1000,
    color : 'Rojo'
}

let auto2 = {
    marca : 'RENAULT',
    modelo : 'FLUENCES',
    peso : 2500,
    color : 'AZUL'
}

console.log(auto1);
console.log(auto2);

console.log('El color del auto1 es :' + auto1.color) ;

// Otra forma de acceder a un atributo es entre []
console.log('La marca del auto1 es :' + auto1["marca"]) ;

const vendedor = {
    nombre : "Pedro",
    apellido : "Gonzalez",
    empresa : "Auto S.A",
    habilidadesBlandas : ["Carisma", "Puntualidad"],
    vender : function(){
        return "Pedro ha vendido un Auto"
    },
    nombreCompleto : function(){
        return this.nombre + " " + this.apellido
    }
}

console.log(vendedor.vender())
console.log(vendedor.nombreCompleto())