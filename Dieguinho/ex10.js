function contarLetra(t, l) {
  let cont = 0;

  for (let i = 0; i < t.length; i++) {
    if (t[i] === l) {
      cont++;
    }
  }

  return cont;
}

const t = "engenharia de software";
const l = "a";

console.log(`A letra "${l}" aparece ${contarLetra(t, l)} vezes em "${t}"`);
