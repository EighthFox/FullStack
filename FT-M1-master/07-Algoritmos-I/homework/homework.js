'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {     //(factorizar)
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
 var array= [1];
 let i= 2;
 
 while (num !== 1){
    if (num%i === 0){
     array.push(i);
     num= num/i;
    } else {
     i++;
   }
 }
 return array;
}


var array= [12, 8, 10, 4, 6, 1];
function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:    
  console.time('rendim');                       
  for (let i=0; i<array.length; i++){  
    for (let j=0; j< array.length -i-1; j++){   //voy achicando la iteración de izq a derecha xq los últimos valores ya van a estar ordenados como mayores
      if (array[j] > array[j+1]){    //comparo si el valor donde estoy parado es menor que el siguiente o si no
        let aux= array[j];   // si el siguiente es mayor entonces los swappeo, los intercambio
        array[j]= array[j+1];
        array[j+1]= aux
      }
    }
  }
  console.timeEnd ('rendim');
  return array;
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

  for(let i=1; i< array.length; i++){
    let aux= array[i];
    let j= i-1;
    while (j>=0 && array[j]>aux){
      array[j+1]= array[j];
      j--;
    }
    array[j+1]= aux;
  }
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

for (let i=0; i< array.length-1; i++){

  var minimo= i;

  for(let j= i+1; j< array.length; j++){
    if (array[minimo] > array[j]){
      minimo= j;          // guardo la posición actualizada del valor más chico
    }
  }
  if(i !== minimo){
   var aux= array[minimo];
   array[minimo] = array[i];
   array[i]= aux;
  }
}
return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
