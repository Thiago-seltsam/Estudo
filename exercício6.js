const carrinho = [
    { nome: 'Camiseta', preco: 49.90, quantidade: 2 },
    { nome: 'Calça Jeans', preco: 129.90, quantidade: 1 },
    { nome: 'Tênis', preco: 199.90, quantidade: 1 },
    { nome: 'Meia', preco: 19.90, quantidade: 3 }
    ];

function somarCarrinho(){
    let soma = 0

    for(i = 0; i < carrinho.length; i++){
        soma = soma + carrinho[i].preco
    }
    return(soma)
}

const ValorTotal = somarCarrinho()
console.log(`O valor do carrinho é de $${ValorTotal.toFixed(2)}`);
const PrecoCaro = carrinho.filter(item =>item.preco >100)
console.log("Os produtos mais caros acima de 100")
console.log(PrecoCaro)
const PrecoAumentar = carrinho.map(carrinho => ({
    ...carrinho,
    PrecoAumentar: (carrinho.preco + 0.1).toFixed(2)
}))

console.log("Preco 10 % Mais caro")
console.log(PrecoAumentar)