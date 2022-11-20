import Button from "../Button";
import Clock from "./Clock";

export default function Stopwatch() {
    return (
        <div className="flex flex-col content-center justify-center items-center gap-4">
            <p className="text-white text-xl font-medium">Escolha um card e inicie o cronômetro!</p>
            <div 
                className="flex content-center justify-center items-center bg-gray-500 w-96 h-24 rounded-lg text-gray-100 text-6xl">
                <Clock />
            </div>
            <Button 
                text="Começar!"
            />
        </div>
    )
}