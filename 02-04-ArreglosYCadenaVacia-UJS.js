/*
Ejemplo de 
tipos de datos
en JavaScript
*/

// Tipo de dato string
var nombre = 'Jose';
console.log(typeof nombre);

nombre = 10.5;
console.log(typeof nombre);

// Tipo de dato numérico
var numero = 1000;
console.log(numero);

// Tipo de dato object
var objeto = {
    nombre: "Jose",
    apellido: "Gil",
    tlfn: "554433221"
};
console.log(objeto);

// Tipo de dato boolean (true, false)
var bandera = true;
console.log(typeof bandera);

// Tipo de dato function
function miFuncion(){}
console.log(typeof miFuncion);

// Tipo de dato Symbol
var simbolo = Symbol("Mi símbolo");
console.log(simbolo);

// Tipo clase es una function
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof Persona);

// Tipo undefined
var x;
console.log(x);

x = undefined;
console.log(typeof x);

// null = ausencia de valor  (tipo object)
var y = null;
console.log(typeof y);

// array
var coches = ["BMW","Audi","Volvo"];
console.log(coches);
console.log(typeof coches);

// cadena vacía
var z = '';
console.log(z);
console.log(typeof z);