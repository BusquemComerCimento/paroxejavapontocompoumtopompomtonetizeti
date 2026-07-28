// Exercício 11 – Validador de idade
// Requer o pacote readline-sync: npm install readline-sync

const readlineSync = require("readline-sync");

function podeVotar(i) {
  return i >= 16;
}

const i = parseInt(readlineSync.question("Digite sua idade: "));

if (podeVotar(i)) {
  console.log("Você pode votar!");
} else {
  console.log("Você ainda não pode votar.");
}
