// Contexto: Uma biblioteca precisa gerenciar seu inventário de livros. Exercício: Crie
// um array de strings livros com os títulos de 4 a 6 livros. Adicione um novo livro ao
// final do array. Remova o segundo livro do array. Encontre a posição (índice) de um
// livro específico (que existe no array) e exiba-o. Exiba o array final.
// //array.push() adiciona no final
// Array.pop() retira do final
// Array.unshift() adiciona no início
// Array.shift() retira do inicio
// Array.splice(indiceInicial, quantidadeDeRemocoes,item1,item2..)

const livros =['Enigma dos 3 corpos','Floresta Negra','O fim da morte','Inferno','Purgatorio','Paraíso']
livros.splice(-1, 1,'Uva')
console.log([livros])

