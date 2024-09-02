const faturamentoMensal = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};


// calcula o valor  do faturamento
let valorTotal = 0;
for (const estado in faturamentoMensal) {
  valorTotal += faturamentoMensal[estado];
}

// calcula e mostra o percentual de cada estado
for (const estado in faturamentoMensal) {
  const percentual = (faturamentoMensal[estado] / valorTotal) * 100;
  console.log(`Percentual de ${estado}: ${percentual.toFixed(2)}%`);
}