import React from "react";

// forma antiga de escrever com class, a nova forma é com function
class Button extends React.Component<{ text: string ,  type?: "button" | "submit" | "reset" | undefined}>
{
    render() {
        const {type = "button"} = this.props;
        return (
            <button 
                type={type}
                className="text-lg font-medium bg-slate-400 border border-slate-500 rounded-md p-2 drop-shadow-xl"
            > {this.props.text}
            </button>
        )
    }
}

export default Button;