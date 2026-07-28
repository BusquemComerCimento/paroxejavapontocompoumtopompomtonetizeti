const readlineSync = require("readline-sync");

const n = parseInt(readlineSync.question("Digite um número: "));

for (let i = n; i >= 1; i--) {
  console.log(i);
}

console.log("Fim!");
