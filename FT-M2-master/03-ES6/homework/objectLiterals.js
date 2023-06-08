function crearObjeto(nombre, apellido, edad){
    const objeto = {
        nombre,
        apellido,
        edad,
    };

    return objeto;
}

const miObjeto = crearObjeto("Emi","Foglino",25);
console.log(miObjeto);

