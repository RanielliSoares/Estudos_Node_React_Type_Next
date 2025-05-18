import { Link } from "react-router-dom";
export function Home() {
  return (
    <div>
      <h1> Bem vindo a página Home.</h1>
      <br></br>
      <Link to={"/sobre"}>Sobre</Link>
      <Link to={"/contatos"}>Contato</Link>
    </div>
  );
}
