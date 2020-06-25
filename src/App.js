import React, { Component } from 'react';

import { calculateSalaryFrom } from './salary.js';
import InputGrossSalary from './components/InputGrossSalary.js';
import InputReadOnly from './components/InputReadOnly.js';
import ProgressBarSalary from './components/ProgressBarSalary.js';
import {
  formatPercent,
  formatPercentLiquid,
} from './helpers/format-percent.js';
import { formatNumber } from './helpers/format-helpers.js';
import css from './app.module.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      grossSalary: '',
      baseINSS: '',
      discountINSS: '',
      percentINSS: '',
      baseIRPF: '',
      percentIRPF: '',
      discountIRPF: '',
      netSalary: '',
      percentLiquid: '',
    };
  }

  handleSalaryCalcs = (event) => {
    let grossSalary = parseFloat(event.target.value);
    if (grossSalary !== '' && !isNaN(grossSalary) && grossSalary !== 0) {
      const {
        baseINSS,
        discountINSS,
        baseIRPF,
        discountIRPF,
        netSalary,
      } = calculateSalaryFrom(grossSalary);

      this.setState({
        grossSalary,
        baseINSS: formatNumber(baseINSS),
        discountINSS: formatNumber(discountINSS),
        percentINSS: formatPercent(baseINSS, baseIRPF),
        baseIRPF: formatNumber(baseIRPF),
        discountIRPF: formatNumber(discountIRPF),
        percentIRPF: formatPercentLiquid(baseINSS, discountIRPF),
        netSalary: formatNumber(netSalary),
        percentLiquid: formatPercentLiquid(grossSalary, netSalary),
      });
    } else {
      this.setState({
        grossSalary: '',
        baseINSS: '',
        discountINSS: '',
        percentINSS: '',
        baseIRPF: '',
        percentIRPF: '',
        discountIRPF: '',
        netSalary: '',
        percentLiquid: '',
      });
    }
  };

  valueAndPercenage(value, percentage) {
    if (percentage === '') return '';
    return `${value} (${percentage})`;
  }

  render() {
    const {
      grossSalary,
      baseINSS,
      discountINSS,
      percentINSS,
      baseIRPF,
      discountIRPF,
      percentIRPF,
      netSalary,
      percentLiquid,
    } = this.state;

    const myStyle = ` ${css.mainContainer}`;

    return (
      <div className={myStyle}>
        <InputGrossSalary
          grossSalary={grossSalary}
          handleGrossSalary={this.handleSalaryCalcs}
        />
        <InputReadOnly calc={baseINSS} inputName={'Base INSS'} />
        <InputReadOnly
          newColor="#e67e22"
          calc={this.valueAndPercenage(discountINSS, percentINSS)}
          inputName={'Desconto INSS'}
        />
        <InputReadOnly calc={baseIRPF} inputName={'Base IRPF'} />
        <InputReadOnly
          newColor="#c0392b"
          calc={this.valueAndPercenage(discountIRPF, percentIRPF)}
          inputName={'Desconto IRPF'}
        />
        <InputReadOnly
          newColor="#16a085"
          calc={this.valueAndPercenage(netSalary, percentLiquid)}
          inputName={'Salário líquido'}
        />
        <ProgressBarSalary
          percentINSS={percentINSS}
          percentIRPF={percentIRPF}
          percentLiquid={percentLiquid}
        />
      </div>
    );
  }
}
