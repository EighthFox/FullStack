let letras = "abhaa"

const levelTwo = (letras) => { 
    if(letras.length < 2) {
        return letras;
    }
    else if(letras.length === 2 ) {
        return letras[0];
    }
    else {
        let newletras = []
        for(let i = 0; i < letras.length; i = i + 2){
            newletras.push(letras[i])
        }
        return newletras.join("");
    }
};

console.log(levelTwo(letras))