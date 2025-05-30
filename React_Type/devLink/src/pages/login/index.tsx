import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { useState, type FormEvent } from "react";
import { auth } from '../../services/firebaseConnection'
import { signInWithEmailAndPassword } from 'firebase/auth'

export function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent) {

    e.preventDefault();
    if (email === '' || senha === '') {
      alert('Por favor, insira seu login e senha')
      return;
    }
    signInWithEmailAndPassword(auth, email, senha)
      .then(() => {
        navigate('/admin', { replace: true })
      })
      .catch((error) => {
        alert('Usuário ou senha incorretos!')
        setEmail('');
        setSenha('');

      })
  }

  return (
    <div className="flex w-full h-screen items-center justify-center flex-col">
      <Link to="/">
        <h1 className="mt-11 text-white mb-7 font-bold text-5xl">Dev
          <span className="bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent">Link</span></h1>
      </Link>
      <form onSubmit={handleSubmit} className="w-full max-w-xl flex flex-col px-1">
        <Input
          required
          placeholder="Digite seu e-mail..."
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          required
          placeholder="*******************"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button
          type="submit"
          className="h-9 bg-blue-600 text-white rounded border-0 text-lg font-medium cursor-pointer"
        >Acessar</button>
      </form>

    </div>
  );
}
