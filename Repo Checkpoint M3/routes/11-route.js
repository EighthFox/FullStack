const router = require('express').Router();
const getCarsByBrand = require('../controllers/05-controller');
/* ⚠️ No modificar nada arriba de esta línea ⚠️

  1️⃣1️⃣ ***** EJERCICIO 11 ***** - GET /cars/:brandName 1️⃣1️⃣:
  
  🟢 Integrar la función getCarsByBrand que desarrollaste previamente (Ejercicio 5) para obtener los coches
  precedentes de una marca.
  🟢 Responder con el resultado de la operación, el formato debe ser: { brand: 'La marca enviada', results: 'Los coches encontrados' }.
  🟢 Responder con el mensaje adecuado si no se encontraron coches asociados a la marca.
  🟢 Si surge algún error durante la operación, responder con el mensaje correspondiente.
  🟢 Si el parámetro el parámetro req.query.sort no equivale a "lowPrice" o a "highPrice", responder el mensaje 
  adecuado. 
  🟢 Si el parámetro req.params.brandName no es una palabra con SÓlo letras responder con el mesnaje adecuado.
  
    📢 PUNTOS A TENER EN CUENTA 📢
  1) Recibirás los argumentos necesarios para ejecutar la función getCarsByBrand mediante las propiedades "params" 
  y "query" de *req*.
  2) Si algo falla debes responder con el mensaje del error.
  3) ¡Revisa en los test el status que deben tener tus respuestas!
  4) Recordá validar los parámetros que recibas a través de la URL.
  5) Debes responder con los coches COMPLETOS, no sólo su ID.
  6) Recuerda que los parametros de URL son recibidos como string.
*/



//⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = router;
