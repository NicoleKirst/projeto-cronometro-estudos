import { Itarefa } from "../../types/tarefa";
import Button from "../Button";
import Clock from "./Clock";
import { useEffect, useState } from 'react';
import { tempoParaSegundos } from "../../common/utils/date";
interface Props {
    selecionado: Itarefa | undefined,
    finalizarTarefa: () => void
}

export default function Stopwatch({selecionado, finalizarTarefa}: Props) {
    const [tempo, setTempo] = useState<number>();
    useEffect(() => {
        if(selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado.tempo));
        }
    },[selecionado]);

    function regrassiva(contador: number = 0) {
        setTimeout(() => {
            if(contador > 0) {
                setTempo(contador - 1);
                return regrassiva(contador - 1);
            }
            finalizarTarefa();
        }, 1000);
    }
    return (
        <div className="flex flex-col content-center justify-center items-center gap-4">
            <p className="text-white text-xl font-medium">Escolha um card e inicie o cronômetro!</p>
            <div 
                className="bg-slate-500 flex content-center justify-center items-center w-96 h-24 rounded-lg text-gray-100 text-6xl">
                <Clock tempo={tempo}/>
            </div>
            <Button 
                onClick={ () => regrassiva(tempo) }
                text="Começar!"
            />
        </div>
    )
}