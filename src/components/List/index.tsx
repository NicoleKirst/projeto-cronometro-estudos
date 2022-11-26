import { Itarefa } from '../../types/tarefa';
import Item from './Item';

interface Props {
    tarefas: Itarefa[],
    selecionaTarefa: (tarefaSelecionada: Itarefa) => void
}

function List({ tarefas, selecionaTarefa }: Props) {
    return(
        <aside className='w-96 h-96'>
            <h2 className='text-white text-xl font-medium mt-4'>Cards de Estudos:</h2>
                
            <ul>
                {tarefas.map((item) => (
                   <Item
                        selecionaTarefa={selecionaTarefa}
                        key={item.id}
                        {...item}
                   /> 
                ))}
            </ul>
        </aside>
    )
}

export default List;