const readlineSync = require("readline-sync");

function criarTabuleiro(n) {
  let t = "";

  for (let l = 0; l < n; l++) {
    let linha = "";

    for (let c = 0; c < n; c++) {
      if ((l + c) % 2 === 0) {
        linha += "#";
      } else {
        linha += " ";
      }
    }

    t += linha;

    if (l < n - 1) {
      t += "\n";
    }
  }

  return t;
}

console.log("Tabuleiro 8x8:");
console.log(criarTabuleiro(8));

const n = parseInt(readlineSync.question("\nDigite o tamanho do tabuleiro: "));
console.log(`\nTabuleiro ${n}x${n}:`);
console.log(criarTabuleiro(n));
