import React, {useState} from 'react';

function Ejercicio3() {
    const [inputValue, setInputValue]= useState('');
    const [agregarList, setAgregarList]= useState([]);

    const handleSubmit= (event)=>{
        const value= event.target.value;
        setInputValue(value);
    }

    const handleAddValue= () => {
        /*if (inputValue.trim() !== '') {*/
            setAgregarList([...agregarList, inputValue]);
            setInputValue(''); // Limpiar el input después de agregar
       /* }*/
    };
    /*const actualizar= (event)=>{
        const i=0;
        while (i<0){
            return <p>{inputValue}</p>
        }
        i++;   
    }*/
    return (
        <div>
            <hr/>
            <h2>Ejercicio 3</h2>
            <h2>Agregar Listado de Tarea</h2>
            <input 
              type="text" 
              placeholder='Ingresar tarea'
              value={inputValue} 
              onChange={handleSubmit} 
            />
            <button type='submit' onClick={handleAddValue}>Agregar Tarea</button>
            {agregarList.map((value, index)=>(
                <div key={index}><p>{value}</p></div>
            ))}
                
            
        </div>
    )
}
export default Ejercicio3;