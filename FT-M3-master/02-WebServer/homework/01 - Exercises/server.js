var fs = require("fs");
var http = require("http");
/* ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️ */
/* AQUÍ DEBAJO PUEDES ESCRIBIR LA CONSTANTE DEL PUERTO */
const PORT = 3001;

const server = http
  .createServer((request, response) => {
    console.log(`Server raised in port ${PORT}`);
    if(request.url==='/api'){
      fs.readFile('./utils/dogsData.json', (error, data) => {
        if(error){
          response.writeHead(404,{ "Content-type": "text/plain" });
          response.end("json not found");
        }
        else{
          response.writeHead(200,{ "Content-type": "application/json" });
          response.end(data);
        }
      })
      return 
    }
    if(request.url==='/allDogs'){
      fs.readFile('./utils/allDogs.html', 'utf8', (error, data) => {
        if(error){
          response.writeHead(404,{ "Content-type": "text/plain" });
          response.end("html not found");
        }
        else{
          response.writeHead(200,{ "Content-type": "text/html" });
          response.end(data);
        }
      })
      return
    }
    else{
      response.writeHead(404,{ "Content-type": "text/plain" });
      response.end("Route not found");
    }
  })
  .listen(PORT, "localhost");

/* ⚠️ LA LÍNEA SIGUIENTE TIENE QUE QUEDAR COMO ESTÁ PARA PODER EXPORTAR EL SERVIDOR ⚠️ */
module.exports =
  /* AQUÍ DEBAJO YA PUEDES ESCRIBIR TÚ CÓDIGO REEMPLAZANDO EL VALOR DE NULL POR EL SERVIDOR */
  server;
