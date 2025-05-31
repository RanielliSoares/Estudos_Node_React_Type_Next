import { useState, type FormEvent } from "react";
import { useEffect } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { FiTrash } from "react-icons/fi";
import { db } from "../../services/firebaseConnection";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addDoc, collection, onSnapshot, query, orderBy, doc, deleteDoc } from "firebase/firestore";

interface linkProps {
  id: string,
  name: string,
  url: string,
  bg: string,
  color: string
}
export function Admin() {

  const [links, setLinks] = useState<linkProps[]>([])
  useEffect(() => {
    const linksRef = collection(db, "links");
    const queryRef = query(linksRef, orderBy("created", "asc"));
    const unsub = onSnapshot(queryRef, (snapshot) => {
      let lista = [] as linkProps[];
      snapshot.forEach((doc) => {
        lista.push({
          id: doc.id,
          name: doc.data().name,
          url: doc.data().url,
          bg: doc.data().bg,
          color: doc.data().color
        })
      })
      setLinks(lista);
    })
    return () => {
      unsub();
    }
  }, [])

  const [nameInput, setNameInput] = useState('');
  const [urlInput, setUrlInput] = useState('');
  const [textColorInput, setTextColorInput] = useState('#F564AB')
  const [backgroundColorInput, setBackgroundColorInput] = useState('#111133')

  async function handleDeleteLink(id: string) {
    const docRef = doc(db, "links", id)
    await deleteDoc(docRef)
    toast.warn("Link deletado!")
  }

  function handleRegister(e: FormEvent) {
    e.preventDefault();
    if (nameInput === "" || urlInput === "") {
      toast.warn("Preencha todos os campos!");
      return;
    }
    addDoc(collection(db, "links"), {
      name: nameInput,
      url: urlInput,
      bg: backgroundColorInput,
      color: textColorInput,
      created: new Date()
    }).then(() => {
      toast.success("Cadastrado com sucesso!")
      setNameInput("")
      setUrlInput("")

    }).catch((error) => {
      toast.error("Erro ao cadastrar no banco!" + error)
    })
  }
  return (

    <div className="flex items-center flex-col min-h-screen pb-7 px-2">
      <ToastContainer />
      <Header />
      <form onSubmit={handleRegister} className="flex flex-col mt-8 mb-3 w-full max-w-xl">
        <label className="text-white font-medium mt-2 mb-2">Nome do link</label>
        <Input
          placeholder="Digite o nome do link"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)} />

        <label className="text-white font-medium mt-2 mb-2">URL do link</label>
        <Input
          placeholder="Digite o nome do link"
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)} />

        <section className="flex my-4 gap-5">
          <div className="flex gap-2 items-center">
            <label className="text-white font-medium mt-2 mb-2">Fundo do link</label>
            <input
              type="color"
              value={backgroundColorInput}
              onChange={(e) => setBackgroundColorInput(e.target.value)}
            />
          </div>
          <div className="flex gap-2 items-center">
            <label className="text-white font-medium mt-2 mb-2">Cor do link</label>
            <input
              type="color"
              value={textColorInput}
              onChange={(e) => setTextColorInput(e.target.value)}
            />
          </div>

        </section>
        {nameInput !== '' && (
          <div className="flex items-center justify-center flex-col mb-7 p-1 border-gray-100/25 border rounded-md">
            <label className="text-white font-medium mt-2 mb-3">Veja como esta ficando:</label>
            <article className="w-11/12 max-w-lg flex flex-col items-center justify-between rounded px-1 py-3"
              style={{ marginBottom: 8, marginTop: 8, backgroundColor: backgroundColorInput }}
            >
              <p className="font-medium"
                style={{ color: textColorInput }}>{nameInput}</p>
            </article>
          </div>)}

        <button type="submit" className="mb-7 bg-blue-600 h-9 rounded-md text-white font-medium gap-4 flex justify-center items-center"
        >Cadastrar</button>
      </form>
      <h2 className="font-bold text-white mb-4 text-2xl">
        Meus Links
      </h2>
      {links.map((link) => (
        <article
          key={link.id}
          style={{ backgroundColor: link.bg, color: link.color }}
          className="select-none flex items-center justify-between w-11/12 max-w-xl rounded py-3 px-2 mb-2">
          <p >{link.name}</p>
          <div>
            <button
              onClick={() => handleDeleteLink(link.id)}
              className="border border-dashed p-1 rounded bg-neutral-900"><FiTrash size={18} color="#fff" /></button>
          </div>
        </article>
      ))}
    </div>
  );
}
