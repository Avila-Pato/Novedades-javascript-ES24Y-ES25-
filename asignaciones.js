// Las asignaciones lógicas en JavaScript son una forma de asignar un valor a una variable basándose en el valor actual de la variable. Existen tres tipos principales de operadores de asignación lógica introducidos en ES2021: &&=, ||=, y ??=. 

// en Javascript todos los valores  tienen una interpretacion booleana cuando son evaludos dentro de un operador logico

// Valores Falsy 
console.log(Boolean(false)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false

// Valores Truthy
console.log(Boolean(true)); // true
console.log(Boolean(1)); // true
console.log(Boolean(-1)); // true
console.log(Boolean(1n)); // true
console.log(Boolean("hello")); // true
console.log(Boolean([])); // true
console.log(Boolean({})); // true
console.log(Boolean(function() {})); // true
