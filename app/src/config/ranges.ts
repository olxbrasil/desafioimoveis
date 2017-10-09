export default [
  {
    label: 'Valor do aluguel por mês:',
    step: '10',
    name: 'rental',
    labelMask: 'currency',
    min: '100',
    max: '10000',
  },
  {
    label: 'Valor do imóvel para compra:',
    step: '100',
    name: 'purchase',
    labelMask: 'currency',
    min: '10000',
    max: '2000000',
  },
  {
    label: 'Quanto tempo você ira morar?',
    step: '1',
    name: 'time',
    labelMask: 'age',
    min: '1',
    max: '30',
  },
  {
    label: 'Taxa de juros anual:',
    step: '0.5',
    name: 'tax',
    labelMask: 'percentage',
    min: '0.5',
    max: '25',
  },
];