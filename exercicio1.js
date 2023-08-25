const usuarios = [
    { id: 11, nome: 'Pedro', idade: 23 },
    { id: 2, nome: 'Pedro', idade: 23 },
    { id: 8, nome: 'Pedro', idade: 23 }
]

usuarios.sort((a, b) => {
    return a.id - b.id
})
console.log(usuarios)

usuarios.sort((a, b) => {
    return b.id - a.id
})
console.log(usuarios)

