// Exercício 3: Classe ContaBancaria
// Crie uma classe ContaBancaria com:
// • Propriedades: titular, saldo (inicializado com 0).
// • Métodos:

// o depositar(valor) → Adiciona o valor ao saldo.
// o sacar(valor) → Subtrai o valor do saldo (se houver saldo
// suficiente).
// o consultarSaldo() → Retorna o saldo atual.

// Exemplo de uso:
// javascript
// const conta = new ContaBancaria("João");
// conta.depositar(100);
// conta.sacar(30);
// console.log(conta.consultarSaldo()); // 70

// git init
// git add .
// git commit -m "Analisando estudo"
// git branch -M main
// git remote add origin https://github.com/Thiago-seltsam/Estudo.git
// git push -u origin main

class ContaBrasil{
    constructor(titular, saldo){
    this.titular = titular;
    this.saldo = 0;
    }
    depositar(valor){
        this.saldo += valor;
        return`O valor da sua conta atular é de R$${this.saldo},00`
    }
    sacar(){

    }
}