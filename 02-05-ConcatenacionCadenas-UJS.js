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