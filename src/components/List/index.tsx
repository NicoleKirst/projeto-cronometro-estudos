import React, { useState } from 'react';
import Item from './Item';

function List() {
    const [tarefas, setTarefas] = useState([{
        tarefa: 'React',
        tempo: '02:00:00'
    }, {
        tarefa: 'Javascript',
        tempo: '01:00:00'
    }]);
    return(
        <aside className='w-96 h-96'>
            <h2 onClick={() => {
                setTarefas([...tarefas,{ tarefa: "Estudar", tempo:"00:02:50"}])
            }}
                className='text-white text-xl font-medium mt-4'>Cards de Estudos:</h2>
                
            <ul>
                {tarefas.map((item, index) => (
                   <Item 
                        key={index}
                        {...item}
                   /> 
                ))}
            </ul>
        </aside>
    )
}

export default List;