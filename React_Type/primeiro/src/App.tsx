import { Header } from "./components/header";
import { Aluno } from "./components/aluno";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <div>
      <Header title="Aprendendo do zero ao avançado!" />

      <Aluno nome="Ana Caroline" idade={25} />

      <Aluno nome="Matheus Fraga" idade={24} />

      <Aluno nome="Lucas Silva" idade={36} />

      <Footer />
    </div>
  );
}
