import React from 'react';
import { useState } from 'react';

const Funcional = (props) => {

    const [contador, setContador] = useState(0);
    const [texto, setTexto] = useState("")

    const clickHandler = () => {
        setContador(contador+1);
    }

    const changeHandler = (event) => {
        setTexto(event.target.value);
    }

    return(
        <>
            <h1>Soy un componente Funcional</h1>
            <p>{props.text}</p>
            <h3>{contador}</h3>
            <div>
                <h3>{texto}</h3>
                <input type="text" onChange={changeHandler}></input>
            </div>
            <button onClick={clickHandler}></button>
        </>
    )
}

export default Funcional;