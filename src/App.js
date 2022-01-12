import {FiSearch} from "react-icons/fi"
import "./styles.css"
function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>
      <div className="container-input">
        <input 
        type="text"
        placeholder="Digite seu CEP..."/>

        <button className="button-search">
          <FiSearch size={25} color="black" /> 
        </button>
      </div>
      <main className="main">
        <h2>CEP: 32532535</h2>
        <span>Rua</span>
        <span>Complemento:</span>
        <span>vila rosa</span>
        <span>Campo grande</span>
      </main>
    </div>
  );
}

export default App;
