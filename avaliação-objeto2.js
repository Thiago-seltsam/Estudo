// Contexto: Um sistema bancário com tipos de conta distintos.
// Exercício:
// • Crie uma classe base ContaBancaria com titular, saldo e métodos depositar(valor) e sacar(valor).
class ContaBancaria{
    constructor(titular, saldo){
        this.titular = titular;
        this.saldo = saldo;
    }
    depositar(valor){
        this.saldo += valor;
        console.log(`Depósito feito de: ${valor}. Saldo da conta: R$${this.saldo}`);
    }
    sacar(valor){
        if( valor <= this.saldo){
            this.saldo -= valor;
            console.log(`Saque feito no valor de R$${valor}. Saldo atual : ${this.saldo}`);
        } else {
            console.log("Saldo insuficiente");
        }
    }
    exibirInfo(){
        console.log("\n -------- Informações Bancárias --------");
        console.log(`Nome: ${this.titular}`);
        console.log(`Saldo: ${this.saldo}`);
     }
}
// • Crie uma subclasse ContaCorrente que herde de ContaBancaria. Adicione uma propriedade limiteChequeEspecial para ContaCorrente. O método sacar() da ContaCorrente deve permitir sacar além do saldo, usando o limite do cheque especial.

class ContaCorrente extends ContaBancaria{
    limite;
    constructor(titular, saldo, limiteEsp){
        super(titular,saldo);
        this.limiteEsp = limiteEsp
    }
    sacar(valor) {
        const limiteTotal = this.saldo + this.limiteEsp;
        if (valor <= limiteTotal) {
          this.saldo -= valor;
        } else {
          console.log("Limite do cheque especial excedido.");
        }
    }
}
// • Crie uma subclasse ContaPoupanca que herde de ContaBancaria. Adicione um método renderJuros(taxa) que aumenta o saldo com base em uma taxa percentual.

class ContaPoupanca extends ContaBancaria {
    renderJuros(juros) {
      this.saldo += this.saldo * (juros / 100);
    }
  }

  const cliente1 = new ContaBancaria("Thiago", 2000);
  cliente1.exibirInfo();
  cliente1.depositar(200);
  cliente1.sacar(400);
  const cliente2 = new ContaCorrente("Rafael", 6000,5000);
  cliente2.exibirInfo();
  cliente2.sacar(30000);