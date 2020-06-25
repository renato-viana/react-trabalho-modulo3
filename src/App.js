import React, { Component } from 'react';

import { calculateSalaryFrom } from './helpers/salary.js';
import InputGrossSalary from './components/InputGrossSalary.js';
import InputReadOnly from './components/InputReadOnly.js';
import ProgressBarSalary from './components/ProgressBarSalary.js';
import css from './app.module.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      grossSalary: '',
    };
  }

  handleSalary = (event) => {
    this.setState({ grossSalary: event.target.value });
  };

  render() {
    const { grossSalary } = this.state;

    const {
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
    } = calculateSalaryFrom(grossSalary);

    const percentINSS = discountINSS / grossSalary;
    const percentIRPF = discountIRPF / grossSalary;
    const percentLiquid = netSalary / grossSalary;

    const myStyle = ` ${css.mainContainer}`;

    return (
      <div className={myStyle}>
        <InputGrossSalary
          grossSalary={grossSalary}
          handleGrossSalary={this.handleSalary}
        />
        <InputReadOnly calc={baseINSS} inputName={'Base INSS'} />
        <InputReadOnly
          newColor="#e67e22"
          calc={discountINSS}
          percentage={percentINSS}
          inputName={'Desconto INSS'}
        />
        <InputReadOnly calc={baseIRPF} inputName={'Base IRPF'} />
        <InputReadOnly
          newColor="#c0392b"
          calc={discountIRPF}
          percentage={percentIRPF}
          inputName={'Desconto IRPF'}
        />
        <InputReadOnly
          newColor="#16a085"
          calc={netSalary}
          percentage={percentLiquid}
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
