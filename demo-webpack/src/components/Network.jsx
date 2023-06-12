import React from 'react';
import Line from './Line.jsx'

const lines = [
    {lineName:"A",
    destination:"Estación H"},
    {lineName:"B",
    destination:"Estación A"},
    {lineName:"C",
    destination:"Estación E"},
    {lineName:"D",
    destination:"Estación A"},
    {lineName:"E",
    destination:"Estación C"},
]

function Network (props) {
    return(
        <>
            { //Usamos llaves porque es código de JavaScript
                lines.map(line => <Line lineName={line.lineName} destination={line.destination} />)
            }
        </>
    )
}

export default Network;