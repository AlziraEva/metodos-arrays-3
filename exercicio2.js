const carros = [
    { nome: 'corola', marca: 'toyota', ano: 2019, cor: 'cinza' },
    { nome: 'argo', marca: 'fiat', ano: 2021, cor: 'preto' },
    { nome: 'ranger', marca: 'ford', ano: 2018, cor: 'cinza' }
]

const ordenar = (carro, campo) => {
    carro.sort((a, b) => {
        return a[campo].localeCompare(b[campo])
    })
    console.log(carro)
}

ordenar(carros, 'nome')
