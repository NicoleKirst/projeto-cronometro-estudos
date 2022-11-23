import React from 'react';
import { Itarefa } from '../../types/tarefa';
import Button from '../Button';
import { v4 as uuidv4 } from 'uuid';

class Form extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>
}>{
    state = {
        tarefa: "",
        tempo: "00:00"
    }

    adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        this.props.setTarefas(tarefasAntigas => [
            ...tarefasAntigas,
            {
                ...this.state,
                selecionado: false,
                completado: false,
                id: uuidv4()
            }])
        this.setState({
            tarefa:"",
            tempo:'00:00'
        })
    }
    render() {
        return (
            <form onSubmit={this.adicionarTarefa.bind(this)}
                className='mt-6 flex flex-col content-center justify-center items-center gap-4  bg-gray-500 w-96 h-72 rounded-lg'>
                <div>
                    <label 
                        htmlFor="tarefa" 
                        className='block text-lg font-medium text-white p-2'
                    >Adicione um novo estudo:</label>
                    <input 
                        type="text" 
                        name="tarefa"
                        id="tarefa"
                        value={this.state.tarefa}
                        onChange={evento => this.setState({...this.state, tarefa: evento.target.value})}
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
                        value={this.state.tempo}
                        onChange={evento => this.setState({...this.state, tempo: evento.target.value})}
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
}

export default Form;