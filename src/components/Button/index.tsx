import React from "react";

interface Props {
    text: string ,  
    type?: "button" | "submit" | "reset" | undefined
    onClick?: () => void 
}

export default  function Button({ onClick, type, text}: Props) {
    return (
        <button 
                onClick={onClick}
                type={type}
                className="text-lg font-medium bg-slate-400 border border-slate-500 rounded-md p-2 drop-shadow-xl"
            > {text}
        </button>
    )
}
