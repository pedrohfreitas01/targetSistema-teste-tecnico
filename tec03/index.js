function calcularFaturamento(faturamento) {
  // faz uma filtragem em todos os faturamentes para ver se existem dias sem faturamento
  const diasComFaturamente = faturamento.filter(
    (valor) => valor !== null && valor !== 0
  );

  if (diasComFaturamente.length === 0) return {}; // Se não houver dias válidos, retorna um objeto vazio

  // O menor e maior valor de faturamento ocorrido em um dia do mês;
  const menorValor = Math.min(...diasComFaturamente);
  const maiorValor = Math.max(...diasComFaturamente);

  // Calcular a média
  const soma = diasComFaturamente.reduce((acc, valor) => acc + valor, 0);
  const media = soma / diasComFaturamente.length;

  // Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
  const diasAcimaMedia = diasComFaturamente.filter(
    (valor) => valor > media
  ).length;

  return {
    menorValor,
    maiorValor,
    diasAcimaMedia,
  };
}

// Exemplo de JSON com faturamento diário , nao achei no teste fiz um do zero pra usar 
const faturamentoJson = `[
  {"dia": 1, "faturamento": 1200},
  {"dia": 2, "faturamento": null},
  {"dia": 3, "faturamento": 1500},
  {"dia": 4, "faturamento": 1700},
  {"dia": 5, "faturamento": 1800},
  {"dia": 6, "faturamento": 1600},
  {"dia": 7, "faturamento": 0},
  {"dia": 8, "faturamento": 1100},
  {"dia": 9, "faturamento": 2100},
  {"dia": 10, "faturamento": 2200}
]`;

// Convertendo o JSON para um objeto JavaScript
const faturamento = JSON.parse(faturamentoJson).map((item) => item.faturamento);
const resultado = calcularFaturamento(faturamento);

console.log("Menor valor de faturamento:", resultado.menorValor);
console.log("Maior valor de faturamento:", resultado.maiorValor);
console.log(
  "Número de dias no mês em que o valor de faturamento diário foi superior à média mensal",
  resultado.diasAcimaMedia
);
