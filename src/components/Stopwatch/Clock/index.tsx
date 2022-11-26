interface Props {
    tempo: number | undefined
}

export default function Clock( { tempo = 0 }: Props) {
    const minutos = Math.floor(tempo/60);
    const segundos = tempo % 60;
    const [minutoDezena, minutoUnidade] = String(minutos).padStart(2,'0');
    const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, '0');

    return (
        <>
            <span className="bg-gray-600 rounded-lg p-2 font-semibold shadow-inner">{minutoDezena}</span>
            <span className="bg-gray-600 rounded-lg p-2 font-semibold shadow-inner">{minutoUnidade}</span>
            <span>:</span>
            <span className="bg-gray-600 rounded-lg p-2 font-semibold shadow-inner">{segundoDezena}</span>
            <span className="bg-gray-600 rounded-lg p-2 font-semibold shadow-inner">{segundoUnidade}</span>
        </>
    )
}