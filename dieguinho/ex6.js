// Exercício 6 – Contagem regressiva
// Requer o pacote readline-sync: npm install readline-sync

const readlineSync = require("readline-sync");

const n = parseInt(readlineSync.question("Digite um número: "));

for (let i = n; i >= 1; i--) {
  console.log(i);
}

console.log("Fim!");
