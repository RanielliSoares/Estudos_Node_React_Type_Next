import { useState } from "react";
import "./App.css";

import logoImg from "./assets/logo.png";

function App() {
  return (
    <div>
      <main className="container">
        <img className="logo" src={logoImg} alt="logo calculadora" />
        <h1 className="title">Qual melhor opção ?</h1>

        <form className="form">
          <label>Alcool (preço por litro):</label>
          <input
            className="input"
            type="number"
            placeholder="4.75"
            min="1"
            step="0.01"
            required
          />
          <label>Gasolina (preço por litro):</label>
          <input
            className="input"
            type="number"
            placeholder="4.75"
            min="1"
            step="0.01"
            required
          />
          <input type="submit" value="Calcular" className="button" />
        </form>
      </main>
    </div>
  );
}

export default App;
