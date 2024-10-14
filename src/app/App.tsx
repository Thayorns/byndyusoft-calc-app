import React, { useState } from 'react';

import './App.css';
import './styles/normalize.css';
import './styles/vars.css';

const App: React.FC = () => {
  
  const calcButtons: (string | JSX.Element)[] = [
    'C', '√', '%', '/', '7', '8', '9', 
    <span className='multiplication-button'>+</span>, 
    '4', '5', '6', '-', '1', '2', '3', '+', 
    '00', '0', ',', '='
  ];
  
  const [userInput, setUserInput] = useState<string | JSX.Element>('');
  const handleClick = () => {

  };

  return (
    <div className="App">
      <div className='calc-wrapper'>

        <div className='calc-inner'>
          
          <div className='input-output'>
            
            <div 
              className='user-input'  
            >
              {userInput}
            </div>
            
            <div className='calc-output'>800</div>
          </div>
          
          <hr className='line-break'/>
          
          <div className='calc-buttons'>
            {calcButtons.map((btn, index) => (
              <button key={index} onClick={() => setUserInput(btn) }>
                {btn}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
