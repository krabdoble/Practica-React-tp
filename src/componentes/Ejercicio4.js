import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';  // Importar para que Chart.js se registre automáticamente

function Ejercicio4 (){
  const data = {
    labels: ["Italy", "France", "Spain", "USA", "Argentina"],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: ["red", "green","blue","orange","brown"],
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 1,
        data: [55, 49, 44, 24, 15]
      }
    ]
  };

  const options = {
    title: {
      display: true,
      text: 'World Wine Production 2018',
      fontSize: 20
    },
    legend: {
      display: true,
      position: 'right'
    }
  };
    return (
      <div>
        <hr/>
            <h2>Ejercicio 4</h2>
            <h2>Grafico</h2>
        <Bar
        data={data}
        options={options}
      />
      </div>
    
    )
}

export default Ejercicio4;