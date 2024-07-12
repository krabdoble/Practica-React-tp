import logo from './logo.svg';
import './App.css';
import Ejercicio1 from './componentes/Ejercicio1';
import Ejercicio2 from './componentes/Ejercicio2';
import Ejercicio3 from './componentes/Ejercicio3';
import Ejercicio4 from './componentes/Ejercicio4';
import MemoTest from './componentes/MemoTest';
import Ahorcado from './componentes/Ahorcado';



function App() {
  return (
    <div className="App">
      <Ejercicio1/>
      <Ejercicio2/>
      <Ejercicio3/>
      <Ejercicio4/>
      <Ahorcado/>
      <MemoTest/>
      
    </div>
  );
}

export default App;
