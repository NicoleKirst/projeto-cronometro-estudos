import { Itarefa } from "../../types/tarefa";
import Button from "../Button";
import Clock from "./Clock";
import { useState } from 'react';
import { tempoParaSegundos } from "../../common/utils/date";
interface Props {
    selecionado: Itarefa | undefined
}

export default function Stopwatch({selecionado}: Props) {
    const [tempo, setTempo] = useState<number>();
    if(selecionado?.tempo) {
        setTempo(tempoParaSegundos(selecionado.tempo));
        
    }
    return (
        <div className="flex flex-col content-center justify-center items-center gap-4">
            <p className="text-white text-xl font-medium">Escolha um card e inicie o cronômetro!</p>
            <div 
                className="bg-slate-500 flex content-center justify-center items-center w-96 h-24 rounded-lg text-gray-100 text-6xl">
                <Clock />
            </div>
            <Button 
                text="Começar!"
            />
        </div>
    )
}