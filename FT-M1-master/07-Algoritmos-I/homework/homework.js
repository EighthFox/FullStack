'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {     //(factorizar)
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

}


var array= [12, 8, 10, 4, 6, 1];
function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:    
  
}
console.log(bubbleSort(array));

// Podría resolverlo OPTIMIZADO, con un While usando un SWICH!! es decir, una variable swap que me indique que no hay q hacer + cambios y 
// termine el bucle cuando sea false: 

// let swap= true;

// while (swap){
//  swap= false;        
//  for (let i=0; i< array.length; i++){
//    if (array[i] > array[i+1]){
//    let aux= array[i];
//    array[i]= array[i+1];
//    array[i+1]= aux;
//    swap= true;      // ahora vuelve a entrar al while
//    }
//   }
//  }
//  return array;
//
//

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:


}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
