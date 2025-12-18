// Contexto: Um sistema para gerenciar diferentes tipos de veículos.
// Exercício:
// • Crie uma classe base Veiculo com propriedades marca, modelo, ano e um método exibirInfo().
// • Crie subclasses Carro e Moto que herdem de Veiculo.
// • A classe Carro deve ter uma propriedade adicional numeroPortas.
// • A classe Moto deve ter uma propriedade adicional cilindradas.
// • Ambas as subclasses devem chamar o super() no construtor.

class BaseVeiculo{
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    exibirInfo(){
        console.log("\n------ Descrição do Veículo ------");
        console.log(`Marca: ${this.marca}`);
        console.log(`O Modelo é: ${this.modelo}`);
        console.log(`O Ano do veículo é : ${this.ano}`);
    }
}

class Carro extends BaseVeiculo{
    porta;
    constructor(marca, modelo, ano, porta){
        super(marca, modelo, ano);
        this.porta = porta;
    }
    exibirInfo(){
        super.exibirInfo();
        console.log(`O veículo possui: ${this.porta}`);

    }
}

class Moto extends BaseVeiculo{
    cilindrada;
    constructor(marca, modelo, ano, cilindrada){
        super(marca, modelo, ano);
        this.cilindrada = cilindrada;
    }
    exibirInfo(){
        super.exibirInfo();
        console.log(`A moto possui: ${this.cilindrada} CC.`)
    }
}
const vec1 = new BaseVeiculo("Ford", "Opala", 1970);
vec1.exibirInfo();
const vec2 = new Carro ("Ford","Maveric",1960,"2 portas");
vec2.exibirInfo();
const vec3 = new Moto("Harley-Davidson","Road Glide", 2026, 1956);
vec3.exibirInfo();