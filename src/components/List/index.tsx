import { Itarefa } from '../../types/tarefa';
import Item from './Item';

function List({tarefas}:{tarefas: Itarefa[]}) {
    return(
        <aside className='w-96 h-96'>
            <h2 className='text-white text-xl font-medium mt-4'>Cards de Estudos:</h2>
                
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