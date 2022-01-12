import {FiSearch} from "react-icons/fi";
import {useState} from "react";
import "./styles.css";
import api from "./services/api";

function App() {

  const[input,setInput] = useState("");
  const[cep,setCep] = useState("");
  async function handleSearch(){
    if(input === ""){
      alert("digite um CEP");
      return;
    } 
    try{
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput("");
    }catch(err){
      alert("Não foi possivel encontrar esse CEP");
      setInput("");

    }
  }
  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>
      <div className="container-input">
        <input 
        type="text"
        placeholder="Digite seu CEP..."
        value={input}
        onChange={(e) =>setInput(e.target.value)}
        />

        <button className="button-search" onClick={handleSearch}>
          <FiSearch size={25} color="white" /> 
        </button>
      </div>
      {//access to useState "cep" and if it is greater than 0, it will show it on the screen
      Object.keys(cep).length > 0 && (
      <main className="main">
        <h2>CEP: {cep.cep}</h2>
        <span>Rua: {cep.logradouro}</span>
        <span>Complemento: {cep.complemento}</span>
        <span>Bairro: {cep.bairro}</span>
        <span>Localidade: {cep.localidade}</span>
      </main>
      )}
   </div>     
  );
}
export default App
