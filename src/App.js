import React, { useState } from 'react'

export default function App() {
  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([
    'Pagar a conta de Água',
    'Paga a conta de Luz',
    'Ajeitar o Notebook',
  ]);

  function handleRegister(e) {
    e.preventDefault();


    setTarefas([...tarefas, input]);
    setInput('');
  }

  return (
    <div>
      <h1>Cadastrando Usuário</h1>

      <form onSubmit={handleRegister}>
        <label>Nome da Tarefa:</label><br />
        <input
          placeholder='Digite sua tarefa'
          value = {input}
          onChange={(e)=> setInput(e.target.value)}
        /><br/>
        <button type='submit'>Registrar</button>

      </form>

      <br/><br/>
      <ul>
        {tarefas.map( tarefa => (
            <li 
            key={tarefa}>
              {tarefa}
            </li>
          ))}
      </ul><br />
    </div>
  )
}
