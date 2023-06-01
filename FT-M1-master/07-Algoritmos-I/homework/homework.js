'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  var array = [1];
  var primos = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
  var i = 0;
  while(num!=1){
    console.log(i)
    if(num%primos[i]===0){
      array.push(primos[i]);
      num = num/primos[i];
      continue;
    }
    i++;
  }
  return array;
}

//console.log(factorear(180))

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  for(let j = 0; j < array.length-1; j++){
    for(let i = 0; i < array.length; i++){
      if(array[i] > array[i+1]){
        var aux = array[i+1];
        array[i+1] = array[i];
        array[i] = aux;
      }
    }
  }
  return array;
}

// var arr1 = [25, 10, 5, 3, 2, 1];
// console.log(bubbleSort(arr1));
// var arr2 = [10, 5, 1, 3, 9]
// console.log(bubbleSort(arr2))

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let j = 1; j < array.length; j++){
    for(let i = 0; i < j; i++){
      console.log(array[j-i])
      console.log(array[j-i-1])
      if(array[j-i]<array[j-i-1]){
        var aux = array[j-i];
        array[j-i] = array[j-i-1];
        array[j-i-1] = aux;
      }
    }
  }
  return array
}

// var arr1 = [25, 10, 5, 3, 2, 1];
// console.log(insertionSort(arr1));


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i = 0; i < array.length-1; i++){
    var min = array[i];
    var indice = 0;
    for(let j = i+1; j < array.length; j++){
      if(min>array[j]){
        console.log(array[j])
        min = array[j];
        indice = j
      }
    }
    // console.log(indice)
    // console.log(min)
    // console.log(i)
    // console.log(array)
    if(indice!=0){
      array[indice] = array[i];
      array[i] = min;
    }
  }
  return array;
}

// var arr1 = [25, 10, 5, 3, 2, 1];
// console.log(selectionSort(arr1));


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
