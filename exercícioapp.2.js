// Crie uma classe Pessoa com as propriedades nome e idade, e um
// método cumprimentar() que retorne:
// "Olá, meu nome é [nome] e eu tenho [idade] anos."
// Exemplo de uso:
// const pessoa1 = new Pessoa("Ana", 25);
// console.log(pessoa1.cumprimentar()); // "Olá, meu nome é Ana e eu tenho
// 25 anos."

class Pessoa {
    constructor(nome, idade,Aperto){
        this.nome = nome;
        this.idade = idade;
        this.Aperto = "Olá";


    }
    //Cumprimentar
    Cumprimentar (){
    return`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos, e você?`
    }
    ApertarMão(educa){
        if(educa = this.Aperto)
            return`Muito prazer em conhecer você, só pra lembrar me chamo ${this.name}.`
    }
    

}
const personal1 = new Pessoa("rafael", 10);
console.log(personal1.Cumprimentar())