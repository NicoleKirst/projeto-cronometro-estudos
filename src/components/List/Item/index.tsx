import { Itarefa } from "../../../types/tarefa";

export default function Item({tarefa,tempo, selecionado, completado, id}: Itarefa) {
    return (
        <li  
            className='flex flex-col justify-center content-center pl-4 text-slate-300 text-md h-16 w-96 bg-slate-700 rounded-lg mt-4'>
            <h3> {tarefa} </h3>
            <span> {tempo} </span>
        </li>
    )
}

//pode dar o export ddefault lá em cima
//versões mais novas não precisam importar o React
