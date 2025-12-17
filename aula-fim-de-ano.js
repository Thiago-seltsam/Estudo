class Funcionario{
    // encapsulamento
    #nome;
    #salario;
    #cargo;
    // método : encapsulado
    constructor(nome, salario, cargo){
         this.#nome = nome;
         this.#salario = salario;
         this.#cargo = cargo;
     }
     // método púplico:
     buscarNome(){
        return this.#nome;
     }

     buscarSalario(){
        return this.#salario;
     }
     aumentarSalario(percentual){
        if(percentual > 0){
            this.#salario += this.#salario * (percentual / 100)
        }
     }

     exibirInfo(){
        console.log("\n -------- Informações Bancárias --------");
        console.log(`Nome: ${this.#nome}`);
        console.log(`Cargo: ${this.#cargo}`);
        console.log(`Salário: R$${this.#salario.toFixed(2)}`);
     }
    
}    


class Gerente extends Funcionario{
    #bonus;

    constructor(nome, salario, cargo, bonus){
        super(nome, salario, cargo);
        this.#bonus = bonus;
    }

    exibirInfo(){
        super.exibirInfo();
        console.log(`Bônus: R$${this.#bonus.toFixed(2)}`);
        const total = this.buscarSalario() + this.#bonus;
        console.log(`Salário total: R$${total}`);
    }
}
const funcionario1 = new Funcionario ("André", 3500, "Técnico de Ti");
// console.log(funcionario1.buscarNome());
funcionario1.exibirInfo();
funcionario1.aumentarSalario(10);
funcionario1.exibirInfo();

const funcionario2 = new Gerente("Iran", 10000, "Gerente de Projetos", 15000);
funcionario2.exibirInfo();
funcionario2.aumentarSalario(30);
funcionario2.exibirInfo();