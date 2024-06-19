// MANIPULACION DE ARRAYS

const dogs = ['Pitbull', 'Chiguagua','Doberman']

const index = 1 //Agrega al array
const deleteCount = 1 //Borra array

const newDogs = dogs.splice(index, deleteCount, 'SanBernardo', 'PatorAleman')

console.log(dogs)


// const dogs2 = [
//     { name: 'Pitbull' },
//     { name: 'Chiguagua' },
//     { name: 'Doberman' }
//   ];

// const sortedNames = dogs2.toSorted((a, b) => {
//     return b.name.localeCompare(a.name);  // Ordenar en orden descendente por nombre
//   });
  
//   console.log({ sortedNames });