// Crie uma função chamada verificarParOuImpar que receba um
// parâmetro numero. A função deve retornar a string "Par" se o número for par, e
// "Ímpar" se for ímpar. Teste a função com diferentes números e exiba os resultados.

function verificarParOuImpar(numero){
    if(numero % 2===0){
        return"Par"
    }else{
        return"Ímpar"
    }
}
console.log(`10 é: ${verificarParOuImpar(10)}`)
console.log(`9 é: ${verificarParOuImpar(9)}`)