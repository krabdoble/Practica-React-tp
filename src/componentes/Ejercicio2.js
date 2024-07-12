import React, { useState} from 'react';


function Ejercicio2(){
    const [firstInputValue, setFirstInputValue] = useState('');
    const [secondInputValue, setSecondInputValue] = useState();
  
    const handleFirstInputChange = (event) => {
      const value = event.target.value;
      setFirstInputValue(value);
      setSecondInputValue(value*120);
    };
  
    return (
      <div>
        <hr/>
        <h2>Ejercicio 2</h2>
        <h2>Pasar de Dollar a Pesos</h2>
        <form>
            <input 
              type="text" 
              placeholder='DOLAR'
              value={firstInputValue} 
              onChange={handleFirstInputChange} 
            />
          <h2>To</h2>
            <input 
              type="text" 
              value={secondInputValue} 
              placeholder='PESOS'
              readOnly 
            />
        </form>
        
      </div>
    );
   
}

export default Ejercicio2;