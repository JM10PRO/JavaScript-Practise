/*
Ejemplo de 
tipos de datos
en JavaScript

Las variables son dinámicas, es decir, no hay que especificar el tipo de variable
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

var z = '';
console.log(z);
console.log(typeof z);

let nombre1 = 'Jose';
let apellido = 'Gil';
let nombreCompleto = nombre1 +' '+ apellido;
console.log(nombreCompleto);

let j = nombre1 + 3 + 24;
console.log(j);

// prioridad a los paréntesis
j = nombre1 + (2+7);
console.log(j);

// se evalúa de izq a derecha
j = 2 + 7 + nombre1;
console.log(j);

// const NO SE PUEDE CAMBIAR SU VALOR
let nombre2;
nombre = 'Jose';
console.log(nombre2);

const apellido2 = 'Gil';
// apellido2 = "cdcd"; ESTO ES UN ERROR

let a1nombreCompleto;
let _nombreCompleto;
let $nombreCompleto;
//let 1nombreCompleto; no está permitido iniciar el nombre de una variable con numeros