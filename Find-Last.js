// Encuentra el ultimo elemento deun array que cumple una condicion

//findlastindex nos da el indice que alla encontrado
//findlast encontraria el elemento

const numbers = [1,2,3,4,5,6]
numbers.findLast(n => n % 2 === 0 )
numbers.findIndex(n => n % 2 === 0 )




// en un array de objetos

const people = [
    {name: 'jhon', age: 30},
    {name: 'jhon', age: 20},
    {name: 'jhon', age: 40},

]

people.findLast(persona => persona.age > 30)