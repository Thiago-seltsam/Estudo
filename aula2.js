// Objeto

// const carro = {
//  Chave  Valor
//     marca:"Fiat",
//     modelo:"Uno com escada",
//     ano: 1994
// }
// console.log(carro.ano)

const produtos= [
    {id: 1, nome: "Notebook", categoria: "Eletrônico", preco:2500},
    {id: 2, nome: "Mouse Gamer", categoria: "Eletrônico", preco:150},
    {id: 3, nome: "Camisa Polo", categoria: "Vestuário", preco:75},
    {id: 4, nome: "Calça Jeans", categoria: "Vesturário", preco:120},
    {id: 5, nome: "Monitor", categoria: "Eletrônico", preco:950},
]
// Método Filter
// const produtosCategoria = produtos.filter(item => item.preco <= 120) // const produtosCategoria = produtos.filter(item => item.categoria === "Eletrônico")  Para buscar atravéz do array.
// console.log(produtosCategoria)

function somarEstoque(){
    let soma = 0

    for (let i = 0; i < produtos.length; i++){
        soma = soma + produtos[i].preco
    }
    return(soma)

}
const total = somarEstoque()
console.log(`O total em estoque é de R$${total.toFixed(2)}`);

const produtosComDesconto = produtos.map(produto => ({
    ...produto,
    produtosComDesconto: (produto.preco * 0.9).toFixed(2)
}));

console.log('Array com Desconto: ');
console.log(produtosComDesconto);