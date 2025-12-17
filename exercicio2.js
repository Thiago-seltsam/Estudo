// Contexto: Um sensor registra as temperaturas máximas de uma semana. Exercício:
// Crie um array chamado temperaturasSemanais com 7 valores numéricos,
// representando as temperaturas máximas de cada dia. Use um loop for para percorrer o
// array e exibir cada temperatura no console, formatada como "Dia [número do dia]:
// [temperatura]°C".


const temperaturasSemanais =['40','45','20','29','30','48']
for(let i = 0; i<temperaturasSemanais.length; i++){
    console.log(`Dia ${i+1}: ${temperaturasSemanais[i]} C°`)
}
