const antiTrollsSecurity = (string) => {
    let newArray = string.split("");
    const vocalArray = ['a','e','i','o','u']
    newArray = newArray.filter((letra) => !vocalArray.includes(letra.toLowerCase()))
    return newArray.join("");
};

module.exports = antiTrollsSecurity;
