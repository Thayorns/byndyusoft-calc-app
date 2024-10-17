import React, { useState } from 'react';

import './App.css';
import './styles/normalize.css';
import './styles/vars.css';

const App: React.FC = () => {
  
  // calc buttons array
  const calcButtons: string[] = [
    'C', '√', '%', '/', '7', '8', '9', '*',
    '4', '5', '6', '-', '1', '2', '3', '+', 
    '00', '0', ',', '='
  ];
  // NEW calc-buttons to add
  // const newCalcButtonsArray = [];
  
  // result string state from 'clicking the buttons'
  const [resultString, setResultString] = useState<string>('');

  // calc-output state from 'resultString' expression
  const [output, setOutput] = useState<string>('');


  // function to type a 'resultString' and to calculate it
  const handleClick = (btn: string) => {
    const value = btn;
    switch(value) {

      case 'C':
        setResultString('');
        setOutput('');
      break;

      case '=':
        try {
          const result = calculateResultString(resultString);
          setOutput(result);
        }catch{
          setResultString('ERROR');
        };
      break;

      default:
      setResultString(prev => prev + value);
    };
  };

  // function checks 'resultString' in order to find the errors & changes '*' -> 'x' 
  const checkResultString = () => {
    return resultString.split('').map((el, index) => {
      if(el === '*') return <span key={index} className='multiplication-button'>+</span>
      return <span>{el}</span>
    })
  };

  const calculateResultString = (str: string) => {
    const cleanupResultString = str.replace(/[^-()\d/*+.]/g,'');
    const result = new Function(`return ${cleanupResultString}`)();
    return result.toString();
  };

  return (
    <div className="App">
      <div className='calc-wrapper'>

        <div className='calc-inner'>
          
          <div className='input-output'>
            
            <div className='user-input' >
              {checkResultString()}
            </div>
            
            <div className='calc-output'>
              {output}
            </div>
          </div>
          
          <hr className='line-break'/>
          
          <div className='calc-buttons'>
            {calcButtons.map((btn, index) => (
              <button key={index} 
                onClick={() => handleClick(btn)}
                className={btn === '*' ? 'multiplication-button' : ''}>
                {btn === '*' ? <span>+</span> : btn}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
