import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [editTask, setEditTask] = useState({
    enabled: false,
    task: "",
  });
  const [tasks, setTasks] = useState<string[]>([]);

  function handleRegister() {
    if (!input) {
      alert("Você não digitou nenhuma tarefa");
      return;
    }
    if (editTask.enabled) {
      handleSavedEdit();
      return;
    }
    setTasks((tarefas) => [...tarefas, input]);
    setInput("");
  }
  function handleSavedEdit() {
    const findIndexTask = tasks.findIndex((task) => task === editTask.task);
    const allTasks = [...tasks];

    allTasks[findIndexTask] = input;
    setTasks(allTasks);
    setEditTask({
      enabled: false,
      task: "",
    });
    setInput("");
  }
  function handleDelete(item: string) {
    const removeTask = tasks.filter((task) => task !== item);
    setTasks(removeTask);
  }
  function handleEdit(item: string) {
    setInput(item);
    setEditTask({
      enabled: true,
      task: item,
    });
  }
  return (
    <>
      <div>
        <h1>Lista de Tarefas</h1>
        <input
          placeholder="Digite o nome da tarefa"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button onClick={handleRegister}>
          {editTask.enabled ? "Atualizar tarefa" : "Adicionar Tarefa"}
        </button>
        <hr />
        {tasks.map((item, index) => (
          <section key={item}>
            <span>{item}</span>
            <button onClick={() => handleEdit(item)}>Editar</button>
            <button onClick={() => handleDelete(item)}>Concluir</button>
          </section>
        ))}
      </div>
    </>
  );
}
