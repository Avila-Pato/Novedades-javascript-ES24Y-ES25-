const todos = [
    {
        id: 1,
        text: 'Todo 1',
        completed: true
    },
    {
        id: 2,
        text: 'Todo 2',
        completed: false
    },
    {
        id: 3,
        text: 'Todo 3',
        completed: true
    },
]


const idToToggle = 2 

// malo, Muta el array originall

const todoToChange = todos.find(todo => todo.id === idToToggle)
todoToChange.completed = !todoToChange.completed
// console.log(todos)


// bueno, no muta el array original

const result = todos.map(todo => {
    if (todo.id === idToToggle) {
        return {
           ...todo,
            completed:!todo.completed
        }
    }
    return todo
})

console.log({ original: todos })
console.log({ result: result })

//Usando e with()

const indexTodo = todos.findIndex(todo => todo.id === idToToggle)
const originalTodo = todos.at(indexTodo)

const result2 = todos.with(
    indexTodo,
    {...originalTodo, completed: !originalTodo.completed}
)