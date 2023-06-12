import React from 'react';

const Line = (props) => { //como props es un objeto prodía pasar los datos como {lineName, destination} y borrar el "props." que esta delante de las propiedades
    return(
        <>
            <h1>Nombre de Linea: {props.lineName}</h1>
            <p>Destino de Linea: {props.destination}</p>
            <hr></hr>
        </>
    )
}

export default Line;