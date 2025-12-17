function gerarTabuada(numero){
console.log(`-------- Tabuada do número ${numero}-----`)
    for(let i=1; i<=10; i++){
        const resultado = numero * i;
        console.log (`${numero} x ${i} = ${resultado}`)
    }
}

gerarTabuada(5);
gerarTabuada(7);
gerarTabuada(10)