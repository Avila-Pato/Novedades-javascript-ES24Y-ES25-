const numbers = [2,8,3,4,19]

const sortedNumbers = numbers.toSorted((a,b) => a- b) //Numbers 

console.log({ sortedNumbers })
console.log({ numbers })


//Metodo Strings

const names = [{ name: 'Isaias'}, { name: 'Pato'}, { name: 'Maicol'}]

const sortedNames = names.toSorted((a,b) => {
    return b.name.localeCompare(a.name) //Strings
}) //Numbers 

console.log({ sortedNames })







