'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) { 
		return array;
  } else {
   var pivot= array[Math.floor(Math.random()* array.length)];  // tomo nro al azar y que sea entero
   var arrayRight= [];
   var arrayLeft= [];
   var equal= [];

   for (let i=0; i<array.length; i++){
     if (array[i] > pivot){
       arrayRight.push(array[i]);
     } else if (array[i] < pivot){
       arrayLeft.push(array[i]);
      } else {
        equal.push(array[i]);
      }
     
    }
   return quickSort(arrayLeft).concat(equal).concat(quickSort(arrayRight));
  }
}


function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  var half= array.length/2;
  if (array.length<2) return array;
  
  var left = array.splice(0, half);


  return mergeFunction(mergeSort(left),mergeSort(array))
}

function mergeFunction(left, right){
 var arr= [];
 while (left.length && right.length){    //corte hasta que tengan al menos un unico valor en el arreglo left y right
   if (left[0] < right[0]) {
     arr.push(left.shift());  
    }  else {
     arr.push(right.shift()); 
  }
}
  return arr.concat(left, right);
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
