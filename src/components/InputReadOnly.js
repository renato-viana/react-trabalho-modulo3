import React from 'react';
import css from '../app.module.css';
import { formatNumber } from '../helpers/format-currency.js';
import { percentFormat } from '../helpers/format-percent.js';

export default function InputReadOnly({
  calc,
  inputName,
  newColor,
  percentage,
}) {
  let formattedValue = calc > 0 ? ' ' + formatNumber(calc) : '';
  formattedValue += percentage > 0 ? ` (${percentFormat(percentage)})` : '';
  return (
    <div className={css.container}>
      <label className={css.label}>{inputName}</label>
      <input
        type="text"
        value={formattedValue}
        style={{ color: newColor }}
        readOnly
      />
    </div>
  );
}
