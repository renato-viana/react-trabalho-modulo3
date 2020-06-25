const formatter = new Intl.NumberFormat('en-US', {
  style: 'percent',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function percentFormat(numberToFormat) {
  return formatter.format(numberToFormat);
}

export { percentFormat };
