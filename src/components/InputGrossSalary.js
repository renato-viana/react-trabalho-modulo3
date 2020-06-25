import React, { Component } from 'react';
import css from '../app.module.css';

export default class InputGrossSalary extends Component {
  render() {
    const { grossSalary, handleGrossSalary } = this.props;

    return (
      <div className={css.inputSalary}>
        <label className={css.label} htmlFor="salary">
          Salário bruto
        </label>
        <input
          id="salary"
          type="number"
          value={grossSalary}
          min="0"
          step="0.01"
          onChange={handleGrossSalary}
        />
      </div>
    );
  }
}
