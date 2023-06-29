const http = require("http"); // importamos el módulo http para poder trabajar con el protocolo
const fs = require('fs');

//Creamos una serie de eventos listener que van a escuchar por requets que ocurren en este socket.

//Creamos el servidor
http
    .createServer((request, response) => {
        if(request.url==="/users"){
            response.writeHead(200,{ "Content-type": "application/json" }); //Para enviar objetos
            const users = [
                {id:1, name:'Emiliano'},
                {id:2, name:'Nino'},
                {id:3, name:'Paula'},
                {id:4, name:'Rocio'},
            ];
            // response.end(users); //No esta pasado a Json
            response.end( JSON.stringify(users)); //Acá convertimos el objeto en JSON   
        }
        if(request.url==="/posts"){
            response.writeHead(200,{ "Content-type": "text/plain" }); //Para enviar texto
            response.end("Esta es la ruta de posts\n");
        }
        if(request.url==="/template"){
            response.writeHead(200,{ "Content-type": "text/html" }); //Para enviar el texto del html en formato HTML
            let miHtml = fs.readFileSync("./template.html", "utf8");
            const name = "Emiliano";

            miHtml = miHtml.replace('{nombre}', name); //Para reemplazar la variable nombre del html con el valor de la constante name.

            response.end(miHtml);           
        }
        else{
            response.writeHead(404,{ "Content-type": "text/html" }); //Para enviar el texto del html en formato HTML
            const miHtml = fs.readFileSync("./error.html");
            response.end(miHtml);
        }
    //Para crear un response empezamos escribiendo el header
        response.writeHead(200,{ "Content-type": "text/plain"}); //Definimos que tipo de información voy a mandar.
    //Le ponemos el status code y algunos pair-values en el header
        response.end("Holis! Creaste tu primer server\n");
    })
    .listen(3001,"localhost"); //En el puerto 3001 de mi computadora esta éste servidor. Los servers locales son para hacer pruebas.

//Por último tenemos que especificar en que puerto y en qué dirección va a estar escuchando nuestro servidor.