'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  var arraySelect = [array[0]];
  var newArray = []
  var arrayLeft = array.filter(x => { if(x<=array[0]) return x });
  arrayLeft.shift();
  var arrayRight = array.filter(x => { if(x>array[0]) return x });

  console.log(arrayLeft)
  console.log(arrayRight)
  if(arrayLeft.length > 1){
    
    arrayLeft = quickSort(arrayLeft)
  }
  if(arrayRight.length > 1){
    
    arrayRight = quickSort(arrayRight)
  }
  newArray = arrayLeft.concat(arraySelect.concat(arrayRight))
  console.log(newArray)
  return newArray
}

//console.log(quickSort([25, 10, 60, 15, 3, 50, 25]))

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  var middleIndex = Math.ceil(array.length/2);
  var newArray = []
  var arrayLeft = array.slice(0,middleIndex);
  var arrayRight = array.slice(middleIndex,array.length);

  console.log(middleIndex);
  console.log(arrayLeft);
  console.log(arrayRight);
  console.log(array);

  if(arrayLeft.length > 1){
    
    arrayLeft = mergeSort(arrayLeft)
  }
  if(arrayRight.length > 1){
    
    arrayRight = mergeSort(arrayRight)
  }
  while(arrayRight.length != 0 && arrayLeft.length != 0){
    if(arrayLeft[0]>=arrayRight[0]){
        newArray.push(arrayRight[0])
        arrayRight.shift();
    }else{
        newArray.push(arrayLeft[0])
        arrayLeft.shift()
    }
  }
  if(arrayRight.length === 0){
    newArray = newArray.concat(arrayLeft)
  }
  if(arrayLeft.length === 0){
    newArray = newArray.concat(arrayRight)
  }

  console.log(newArray)
  return newArray
}

//mergeSort([1, 25, 3, 10, 5])

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
