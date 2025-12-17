function calcularIMC(peso, altura){
    return peso/(altura*altura)
}
const pessoa1= calcularIMC(67,1.49)
console.log(pessoa1.toFixed(1))
console.log("O IMC da pessosa é de",pessoa1.toFixed(2))