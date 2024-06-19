/*
-> toReversed()
-> toSorted()
-> toSpliced()
-> with()
*/

const users = [
    {id: 1, name: 'Isaias', fav: { food: 'Pollo' } },
    {id: 1, name: 'Pato', fav: { food: 'Pasta' } },
    {id: 1, name: 'Maicol', fav: { food: 'Papitas' } },
]

// const deepCopy = structuredClone(users) //Copia profunda de los datos en javascript

const reverseUsers = users.toReversed() // solo copia el primer nivel de la superficie
// const reverseUsers = deepCopy.toReversed() 
// console.log(reverseUsers)

reverseUsers[0].fav.food = 'Hamburgesa'

console.log(users)

