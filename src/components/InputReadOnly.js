import React from 'react';
import css from '../app.module.css';

export default function InputReadOnly({ calc, inputName, newColor }) {
  return (
    <div className={css.container}>
      <label className={css.label}>{inputName}</label>
      <input type="text" value={calc || ''} style={{ color: newColor }} readOnly />
    </div>
  );
}
