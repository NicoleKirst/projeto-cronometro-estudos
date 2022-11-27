import React, { useState } from 'react';
import { Itarefa } from '../../types/tarefa';
import Button from '../Button';
import { v4 as uuidv4 } from 'uuid';

interface Props {
    setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>
}

export default function Form ({ setTarefas }: Props) {
    const [tarefa, setTarefa] = useState("");
    const [tempo, setTempo] = useState("00:00");
    function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        setTarefas(tarefasAntigas => [
            ...tarefasAntigas,
            {
                tarefa,
                tempo,
                selecionado: false,
                completado: false,
                id: uuidv4()
            }])
        setTarefa("");
        setTempo("00:00");
    }
    return (
        <form onSubmit={adicionarTarefa}
                className='bg-slate-500 mt-6 flex flex-col content-center justify-center items-center gap-4 w-96 h-72 rounded-lg'>
                <div>
                    <label 
                        htmlFor="tarefa" 
                        className='block text-lg font-medium text-white p-2'
                    >Adicione um novo estudo:</label>
                    <input 
                        type="text" 
                        name="tarefa"
                        id="tarefa"
                        value={tarefa}
                        onChange={evento => setTarefa(evento.target.value)}
                        placeholder="O que você quer estudar?"
                        required
                        className='w-64 h-12 p-4 rounded-lg bg-gray-600 shadow-inner placeholder-white'
                    />
                </div>
                <div>
                    <label 
                        htmlFor="tempo" 
                        className='block text-lg font-medium text-white p-2'
                    >Tempo:</label>
                    <input 
                        type="time"
                        step="1"
                        name="tempo"
                        id="tempo"
                        value={tempo}
                        onChange={evento => setTempo(evento.target.value)}
                        min="00:00:00"
                        max="01:30:00" 
                        required
                        className='w-64 h-12 p-4 rounded-lg bg-gray-600 shadow-inner text-white'
                    />
                </div>
                <Button type="submit"
                    text="Adicionar"
                />
            </form>
    )
}