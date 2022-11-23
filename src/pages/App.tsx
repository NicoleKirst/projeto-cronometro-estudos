import React, { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import Stopwatch from '../components/Stopwatch';
import { Itarefa } from '../types/tarefa';

function App() {
const [tarefas, setTarefas] = useState<Itarefa[]>([]);
  return (
    <div className="App">
      <div 
        className='flex items-start gap-10 content-center justify-center'
      >
      <div 
        className='flex flex-col items-center gap-4 content-center justify-center'>
        <Form setTarefas={setTarefas}/>
        <Stopwatch />
      </div>
        <List tarefas={tarefas}/>
      </div>
    </div>
  );
}

export default App;
