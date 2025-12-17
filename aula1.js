// 1- Crie uma função chamada saudarUsuario que receba um parâmetro
//nome. A função deve retornar uma string como "Olá, [nome]! Seja bem-vindo(a) ao
//nosso aplicativo.". Em seguida, chame a função passando seu nome e exiba o
//resultado no console.

nome = "Thiago"

console.log("Olá" ,nome,"!!","Sejam bem vindo ao nosso aplicativo.")

// 2- Crie uma função chamada calcularIMC que receba dois parâmetros:
//peso (em kg) e altura (em metros). A função deve calcular o IMC usando a fórmula
//IMC = peso / (altura * altura) e retornar o valor. Teste a função com seus próprios
//valores e exiba o resultado

function IMC(p,a){
    return p/(a*a)
}
const resultado = IMC(50,1.75);
console.log("O IMC da pessoa é de",resultado.toFixed(1),".")

// 3- Crie uma função chamada verificarParOuImpar que receba um
//parâmetro numero. A função deve retornar a string "Par" se o número for par, e
//"Ímpar" se for ímpar. Teste a função com diferentes números e exiba os resultados.

