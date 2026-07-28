// Exercício 15 – Catálogo de produtos

const prods = [
  { id: 1, nome: "Teclado", preco: 90 },
  { id: 2, nome: "Mouse", preco: 60 },
  { id: 3, nome: "Monitor", preco: 850 },
  { id: 4, nome: "Headset", preco: 120 },
  { id: 5, nome: "Webcam", preco: 150 },
];

// a) Buscar o produto de id 3
const p3 = prods.find((p) => p.id === 3);
console.log("Produto com id 3:");
console.log(p3);

// b) Listar os produtos com preço acima de 100
const caros = prods.filter((p) => p.preco > 100);
console.log("\nProdutos com preço acima de 100:");
console.log(caros);

// c) Criar um array só com os nomes dos produtos
const nomes = prods.map((p) => p.nome);
console.log("\nNomes dos produtos:");
console.log(nomes);

// d) Exibir cada produto formatado
console.log("\nCatálogo completo:");
prods.forEach((p) => {
  console.log(`#${p.id} - ${p.nome}: R$ ${p.preco.toFixed(2)}`);
});
