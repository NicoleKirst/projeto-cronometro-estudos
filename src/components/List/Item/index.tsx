import { Itarefa } from "../../../types/tarefa";

interface Props extends Itarefa {
    selecionaTarefa: (tarefaSelecionada: Itarefa) => void
}


export default function Item(
    {
        tarefa,
        tempo, 
        selecionado, 
        completado, 
        id, 
        selecionaTarefa
    }: Props) {
    return (
        <li  
            onClick={() => selecionaTarefa(
            {
                tarefa,
                tempo,
                selecionado,
                completado,
                id
            })}
            className={`${selecionado ? 
            'bg-blue-500 flex flex-col justify-center content-center pl-4 text-slate-300 text-md h-16 w-96 rounded-lg mt-4': 
            'flex flex-col justify-center content-center pl-4 text-slate-300 text-md h-16 w-96 bg-slate-700 rounded-lg mt-4'}`}>
            <h3> {tarefa} </h3>
            <span> {tempo} </span>
        </li>
    )
}


