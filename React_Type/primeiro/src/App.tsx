import { useState } from "react";

interface InfoAlunoProps {
  nome: string;
  idade: string;
}

export default function App() {
  const [input, setInput] = useState("");
  const [idade, setIdade] = useState("");
  const [contador, setContador] = useState(0);

  const [infoAluno, setInfoAluno] = useState<InfoAlunoProps>();

  function mostrarNome() {
    setInfoAluno({
      nome: input,
      idade: idade,
    });
  }
  function somaContador() {
    setContador(contador + 1);
  }
  function subtraiContador() {
    if (contador === 0) {
      return;
    }
    setContador(contador - 1);
  }
  return (
    <div>
      <h1>Trabahando com UseState</h1>
      <input
        placeholder="Digite o nome"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <input
        placeholder="Digite a idade"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
      />
      <button onClick={mostrarNome}>Mostrar nome</button>
      <hr />
      <h3>Bem vindo: {infoAluno?.nome}</h3>
      <h4>Idade: {infoAluno?.idade}</h4>
      <h3>Contador: {contador}</h3>
      <button onClick={somaContador}>+</button>
      <button onClick={subtraiContador}>-</button>
    </div>
  );
}
