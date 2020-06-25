import React from 'react';
import css from '../app.module.css';

export default function ProgressBarSalary({ percentINSS, percentIRPF, percentLiquid }) {
  
    return (
      <div className={css.progressBarSalary}>
        <div
          style={{
            background: '#e67e22',
            height: '10px',
            width: `${percentINSS}`,
          }}
        ></div>
        <div
          style={{
            background: '#c0392b',
            height: '10px',
            width: `${percentIRPF}`,
          }}
        ></div>
        <div
          style={{
            background: '#16a085',
            height: '10px',
            width: `${percentLiquid}`,
          }}
        ></div>
      </div>
    );
  
}
