import React from "react";

export default function Card({name, status, species, gender, origin, image, onClose}) {
   return (
      <div>
         <button onClick={onClose}>X</button>
         <h2>Nombre: {name}</h2>
         <h2>Estado: {status}</h2>
         <h2>Especie: {species}</h2>
         <h2>Género: {gender}</h2>
         <h2>Nombre Real: {origin.name}</h2>
         <img src={image} alt='icon' />
      </div>
   );
}
