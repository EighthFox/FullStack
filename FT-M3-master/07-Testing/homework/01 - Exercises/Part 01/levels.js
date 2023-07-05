const levelOne = (a, b) => { return a + b };

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

const levelThree = (a, b) => {
    let unionArray = [];
    
    if(!a.length || !b.length){
        return unionArray.concat(a).concat(b);
    }
    if(a[0] < b[0]){
        unionArray.push(a.shift())
    } else {
        unionArray.push(b.shift())
    }
    return unionArray.concat(levelThree(a, b))
};

const levelFour = (num) => {
    if(num === 1729 || num === 1 || num === 81 || num === 1458 ) return true
    else return false
};

module.exports = { levelOne, levelTwo, levelThree, levelFour };
