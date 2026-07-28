const turma = [
  { nome: "Ana", nota: 8.5 },
  { nome: "Bruno", nota: 6.0 },
  { nome: "Carla", nota: 7.0 },
  { nome: "Diego", nota: 4.5 },
  { nome: "Elisa", nota: 9.2 },
];

const bol = turma.map((a) => {
  return {
    ...a,
    situacao: a.nota >= 7 ? "Aprovado" : "Reprovado",
  };
});

console.log("Boletim da turma:");
bol.forEach((a) => {
  console.log(`${a.nome} - Nota: ${a.nota} - ${a.situacao}`);
});

const aprov = bol.filter((a) => a.situacao === "Aprovado");
console.log(`\nTotal de aprovados: ${aprov.length}`);

const soma = bol.reduce((s, a) => s + a.nota, 0);
const media = soma / bol.length;
console.log(`Média geral da turma: ${media.toFixed(2)}`);
