import { useState, type FormEvent } from "react";
import "./App.css";
import logoImg from "./assets/logo.png";

interface InfoProps {
  title: string;
  gasolina: string | number;
  alcool: string | number;
}
function App() {
  const [gasolinaInput, setGasolinaInput] = useState(1);
  const [alcoolInput, setAlcoolInput] = useState(1);
  const [info, setInfo] = useState<InfoProps>();

  function calcular(event: FormEvent) {
    event.preventDefault();

    let calculo = alcoolInput / gasolinaInput;

    if (calculo <= 0.7) {
      setInfo({
        title: "Compensa usar Alcool",
        gasolina: formatMoeda(gasolinaInput),
        alcool: formatMoeda(alcoolInput),
      });
    } else {
      setInfo({
        title: "Compensa usar Gasolina",
        gasolina: formatMoeda(gasolinaInput),
        alcool: formatMoeda(alcoolInput),
      });
    }
  }

  function formatMoeda(valor: number) {
    let valorFormatado = valor.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
    return valorFormatado;
  }

  return (
    <>
      <main className="container">
        <img className="logo" src={logoImg} alt="logo calculadora" />
        <h1 className="title">Qual melhor opção ?</h1>

        <form className="form" onSubmit={calcular}>
          <label>Alcool (preço por litro):</label>
          <input
            className="input"
            type="number"
            placeholder="4.75"
            min="1"
            step="0.01"
            required
            value={alcoolInput}
            onChange={(e) => setAlcoolInput(Number(e.target.value))}
          />
          <label>Gasolina (preço por litro):</label>
          <input
            className="input"
            type="number"
            placeholder="4.75"
            min="1"
            step="0.01"
            required
            value={gasolinaInput}
            onChange={(e) => setGasolinaInput(Number(e.target.value))}
          />
          <input type="submit" value="Calcular" className="button" />
        </form>

        {info && Object.keys(info).length > 0 && (
          <section className="result">
            <h2 className="result-title">{info.title}</h2>
            <span>Gasolina: {info.gasolina}</span>
            <span>Alcool: {info.alcool}</span>
          </section>
        )}
      </main>
    </>
  );
}

export default App;
