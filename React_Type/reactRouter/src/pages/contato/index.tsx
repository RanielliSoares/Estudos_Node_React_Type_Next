import { Link } from "react-router-dom";
export function Contato() {
  return (
    <div>
      <h1> Bem vindo a página Contato.</h1>
      <br></br>
      <Link to={"/sobre"}>Sobre</Link>
      <Link to={"/"}>Home</Link>
    </div>
  );
}
