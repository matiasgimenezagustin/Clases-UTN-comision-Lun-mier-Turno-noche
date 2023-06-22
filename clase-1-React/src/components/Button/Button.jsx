import React from "react";
import './button.css'

const Button = ({accion, type}) =>{
    

    return (
        <button onClick={accion} className={'btn ' + type} style={{height: '200px'}}>Click</button>
    )
}


export default Button