import React from 'react';  //para utilizar "etiquetas" dentro de funciones
import ReactDOM from 'react-dom'; //Para usar reactDOM de renderizado
import Network from './src/components/Network.jsx';

function App(props) {
	return ( //<h1>Tukis</h1> Prueba
        <>
            <Network />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('app'));
