// Exercício 8 – Tabuleiro de xadrez (Desafio)
// Gera um tabuleiro NxN alternando espaço e # para formar o padrão

const readlineSync = require("readline-sync");

function criarTabuleiro(n) {
  let t = "";

  for (let l = 0; l < n; l++) {
    let linha = "";

    for (let c = 0; c < n; c++) {
      // Alterna o caractere de acordo com a soma da linha e coluna
      if ((l + c) % 2 === 0) {
        linha += "#";
      } else {
        linha += " ";
      }
    }

    t += linha;

    // Não adiciona \n depois da última linha
    if (l < n - 1) {
      t += "\n";
    }
  }

  return t;
}

// Tabuleiro fixo 8x8
console.log("Tabuleiro 8x8:");
console.log(criarTabuleiro(8));

// Tabuleiro com tamanho lido do usuário
const n = parseInt(readlineSync.question("\nDigite o tamanho do tabuleiro: "));
console.log(`\nTabuleiro ${n}x${n}:`);
console.log(criarTabuleiro(n));
