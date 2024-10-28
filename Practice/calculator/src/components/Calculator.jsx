// src/components/Calculator.js
import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (label) => {
    if (label === 'C') {
      setInput('');
      setResult('');
    } else if (label === '=') {
      try {
        setResult(eval(input)); // Evaluating the input string
      } catch (error) {
        setResult('Error');
      }
    } else {
      setInput(input + label); // Append the clicked button's label to the input
    }
  };

  return (
    <div className="calculator">
      <Display input={input} result={result} />
      <div className="button-grid">
        {/* Number buttons */}
        <Button label="1" onClick={handleButtonClick} />
        <Button label="2" onClick={handleButtonClick} />
        <Button label="3" onClick={handleButtonClick} />
        <Button label="+" onClick={handleButtonClick} className="operator" />
        <Button label="4" onClick={handleButtonClick} />
        <Button label="5" onClick={handleButtonClick} />
        <Button label="6" onClick={handleButtonClick} />
        <Button label="-" onClick={handleButtonClick} className="operator" />
        <Button label="7" onClick={handleButtonClick} />
        <Button label="8" onClick={handleButtonClick} />
        <Button label="9" onClick={handleButtonClick} />
        <Button label="*" onClick={handleButtonClick} className="operator" />
        <Button label="C" onClick={handleButtonClick} className="clear" />
        <Button label="0" onClick={handleButtonClick} />
        <Button label="=" onClick={handleButtonClick} className="equals" />
        <Button label="/" onClick={handleButtonClick} className="operator" />
      </div>
    </div>
  );
};

export default Calculator;
