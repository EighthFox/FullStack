export function increment() {
  return {
    type: 'INCREMENT',
  }
};
export function decrement() {
    return {
      type: 'DECREMENT',
  };
};
export function reset() {
  return {
    type: 'RESET',
  }
}

//Las actions creators que van a estar involucradas de promesas, de consultas de datos, etc. Van a estar esta sintaxis.
export const getUser = () => {
  //retornamos una función que recibe la capacidad de hacer dispatch. La función va a ser fetch, es decir la petición de los datos. Una vez recibo la respuesta y transformo el json que me viene en un objeto de JavaScript. Luego eso que converti en objeto que ahora se llama data, lo paso como información por dispatch.
  return function(dispatch){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    .then((data) => dispatch({ type: GET_USER, payload: data }))
  }
}
