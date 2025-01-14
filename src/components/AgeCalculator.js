import React from 'react';
import './AgeCalculator.css';
import Input from './input.js';
import Output from './output.js'

const AgeCalculator = () => {
  return (
    <div className='container'>
      <h1 className='heading'>Age Calculator</h1>
      <div className='main'>
        <div className='left'>
          <Input/>
        </div>
        <div className='right'>
          <Output/>
        </div>
      </div>
    </div>
  )
};

export default AgeCalculator;