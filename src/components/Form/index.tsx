import React from 'react';
import Button from '../Button';
class Form extends React.Component {
    render() {
        return (
            <form 
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
                        min="00:00:00"
                        max="01:30:00" 
                        required
                        className='w-64 h-12 p-4 rounded-lg bg-gray-600 shadow-inner text-white'
                    />
                </div>
                <Button 
                    text="Adicionar"
                />
            </form>
        )
    }
}

export default Form;