import React, { useState } from 'react';


const palabras = [
    "javascript",
    "programacion",
    "mobile",
    "desarrollo",
    "framework",
  ]
  
  function Ahorcado() {
    const [letra, setLetra] = useState("")
    const [palabraSeleccionada, setPalabraSeleccionada] = useState(
      palabras[Math.floor(Math.random() * palabras.length)]
    )
    const [letrasAdivinadas, setLetrasAdivinadas] = useState([])
    const [intentosRestantes, setIntentosRestantes] = useState(6)
  
    const actualizar = (e) => {
      setLetra(e.target.value)
    }
  
    const procesarLetra = () => {
      if (!letrasAdivinadas.includes(letra)) {
        setLetrasAdivinadas([...letrasAdivinadas, letra])
        if (!palabraSeleccionada.includes(letra)) {
          setIntentosRestantes(intentosRestantes - 1)
        }
      }
    }
  
    const mostrarEstadoActual = () => {
      let estadoActual = ""
  
      for (let i = 0; i < palabraSeleccionada.length; i++) {
        if (letrasAdivinadas.includes(palabraSeleccionada[i])) {
          estadoActual += palabraSeleccionada[i]
        } else {
          estadoActual += "_ "
        }
      }
  
      return (
        <div>
          <p>Palabra: {estadoActual}</p>
        </div>
      )
    }
  
    const verificarEstado = () => {
      const letrasDePalabra = palabraSeleccionada.split("")
  
      if (intentosRestantes == 0) {
        return <h2>Perdiste, la palabra es {palabraSeleccionada}</h2>
      } else if (
        letrasDePalabra.every((letra) => letrasAdivinadas.includes(letra))
      ) {
        return <h2>Ganaste!</h2>
      }
    }
  
    return (
      <div>
        <h1>Ahorcado</h1>
  
        <input
          type="text"
          placeholder="letra"
          value={letra}
          onChange={actualizar}
          maxlength="1"
        ></input>
        <p>{mostrarEstadoActual()}</p>
        <p>Intentos Restantes: {intentosRestantes}</p>
  
        <button onClick={procesarLetra}>Procesar Letra</button>
  
        {verificarEstado()}
      </div>
    )
  }
  export default Ahorcado