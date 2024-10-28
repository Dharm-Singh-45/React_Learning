import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';
import './Calculator.css'; // Import the CSS

function Calculator() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const calculateHandler = (label) => {
        if (label === 'C') {
            setInput('');
            setResult('');
        } else if (label === '=') {
            try {
                setResult(eval(input));
            } catch (error) {
                setResult('ERROR');
            }
        } else {
            setInput(input + label);
        }
    };

    return (
        <div className="calculator-container">
            <Display input={input} result={result} />
            <div className="button-grid">
                <Button label='1' onClick={calculateHandler} />
                <Button label='2' onClick={calculateHandler} />
                <Button label='3' onClick={calculateHandler} />
                <Button label='+' onClick={calculateHandler} className="operator"/>
                <Button label='4' onClick={calculateHandler} />
                <Button label='5' onClick={calculateHandler} />
                <Button label='6' onClick={calculateHandler} />
                <Button label='7' onClick={calculateHandler} />
                <Button label='8' onClick={calculateHandler} />
                <Button label='9' onClick={calculateHandler} />
                <Button label='0' onClick={calculateHandler} />
                <Button label='-' onClick={calculateHandler} className="operator"/>
                <Button label='*' onClick={calculateHandler} className="operator"/>
                <Button label='/' onClick={calculateHandler} className="operator"/>
                <Button label='C' onClick={calculateHandler} className="clear"/>
                <Button label='=' onClick={calculateHandler} className="equals"/>
            </div>
        </div>
    );
}

export default Calculator;
