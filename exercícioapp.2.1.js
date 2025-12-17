// Exercício 2: Classe Retângulo
// Crie uma classe Retangulo com as propriedades largura e altura e dois
// métodos:
// • calcularArea() → Retorna a área do retângulo (largura * altura).
// • calcularPerimetro() → Retorna o perímetro (2 * (largura +
// altura)).
// Exemplo de uso:
// const retangulo = new Retangulo(5, 10);
// console.log(retangulo.calcularArea()); // 50
// console.log(retangulo.calcularPerimetro()); // 30

class retangulo {
    constructor (largura, altura){
        this.largura = largura;
        this.altura = altura;
        this.area = 0
        this.perimetro = 0
    } 
    CalcuArea(){
        this.area = this.altura * this.largura;
        return`A área do retangulo é ${this.area} m.`
    }
    CalPeri(){
        this.perimetro = 2 *(this.largura + this.altura)
        return`Seu perímetro é de ${this.perimetro} m.`
    }
}
const ret = new retangulo(5, 30);
console.log(ret.CalcuArea());
const peri = new retangulo(10, 30);
console.log(peri.CalPeri());