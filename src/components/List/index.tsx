import React from 'react';
import { isTemplateExpression } from 'typescript';

function List() {
    const tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00'
    }, {
        tarefa: 'Javascript',
        tempo: '01:00:00'
    }]
    return(
        <aside className='w-96 h-96'>
            <h2 className='text-white text-xl font-medium'>Estudos do dia:</h2>
            <ul>
                {tarefas.map((item, index) => (
                    //não é boa prática usar o index pois ele vária, o ideal é usar ID
                    <li 
                        key={index} 
                        className='flex flex-col justify-center content-center pl-4 text-slate-300 text-md h-16 w-96 bg-slate-700 rounded-lg mt-4'>
                        <h3> {item.tarefa} </h3>
                        <span> {item.tempo} </span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default List;