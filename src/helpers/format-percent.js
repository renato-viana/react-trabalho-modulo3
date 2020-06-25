function formatPercent(grossSalary, discountSalary) {
  let result = ((discountSalary - grossSalary) / grossSalary) * -100;
  return `${result.toFixed(2)}%`;
}

function formatPercentLiquid(grossSalary, discountSalary) {
  let result = 100 - ((discountSalary - grossSalary) / grossSalary) * -100;
  return `${result.toFixed(2)}%`;
}
export { formatPercent, formatPercentLiquid };
