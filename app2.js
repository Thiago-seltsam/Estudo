class carro {
    constructor (marca, cor) {
        this.marca = marca;
        this.cor = cor;
        this.velocidade = 0;
    }
    // Método:
    ligar(){
        return `O carro ${this.marca} de cor ${this.cor} ligou o motor.`
    }
    acelerar(quantidade){
        this.velocidade+= quantidade;
        return`${this.marca} está acelerando, velocidade atual: ${this.velocidade} km/h.`
    
    }
    reduzir(quantidade){
        this.velocidade-= quantidade;
        return`${this.marca} está reduzindo, velocidade atual: ${this.velocidade} km/h`
    }
    frear(){
        this.velocidade = 0;
    return`${this.marca} parou `
    }
}
// Herança 
class Caminhonete extends carro{
    constructor(marca, cor, capacidadedeCarga){
        super(marca, cor);
        this.capacidadedeCarga = capacidadedeCarga;
    }
//Método específico
    carregar(peso){
        if(peso <= this.capacidadedeCarga){
            return`Carga de ${peso} kg. liberada Capacidade até ${this.capacidadedeCarga} kg.`
        }else{
            return`Aviso:O Peso de ${peso} kg excede a capacidade de ${this.capacidadedeCarga} `
        }
    }
}

const HiluxCaminhonete = new Caminhonete("Hilux","prata", 800);
const s10Caminhonete = new Caminhonete("S10","azul", 1000);
console.log(HiluxCaminhonete.carregar(600))
console.log(s10Caminhonete.carregar(1200))

// const meuCarro = new carro ("Fiat", "Amarela");
// const meuFusca = new carro ("Volkswagen", "preto");
// console.log(meuFusca.ligar())
// console.log(meuFusca.acelerar(50));
// console.log(meuFusca.acelerar(30));
// console.log(meuCarro.acelerar(30));
// console.log(meuCarro.acelerar(90));
// console.log(meuFusca.acelerar(90));
// console.log(meuFusca.frear());
// console.log(meuFusca.acelerar(30));
// console.log(meuFusca.frear());