const express = require("express");

let publications = [];
let id = 0;

const server = express();

server.use(express.json());

server.post("/posts", (request, response) => {
    const { author, title, contents } = request.body;
    if( author && title && contents ){
        const newObj = {
            id: ++id,
            author: author,
            title: title,
            contents: contents
        }
        publications.push(newObj);
        response.status(200).json(newObj);
    } else {
        response.status(404).json({error: "No se recibieron los parámetros necesarios para crear la publicación"});
    }
});

server.get("/posts", (request, response) => {
    const author = request.query.author
        .split("?")[1]
        .split("&")[0]
        .split("=")[1]
    .replace("%20", " ");
    const title = request.query.title
        .split("?")[1]
        .split("&")[0]
        .split("=")[1]
        .replace("%20", " ");
    const samePublications = publications.filter((publication) => {
        publication.author === author && publication.title === title
    })
    if(samePublications.length > 0) 
        response.status(200).json(samePublications);
    else 
        response.status(404).json({error: "No existe ninguna publicación con dicho título y autor indicado"});
});

server.get("/posts/:author", (request, response) => {
    const { author } = request.params;
    const publicationAuthor = publications.filter((publication) => {
        publication.author === author
    })
    if(publicationAuthor.length > 0){
        response.status(200).json(publicationAuthor);
    } else {
        response.status(404).json({error: "No existe ninguna publicación del autor indicado"});
    }
});

server.put("/posts/:id", (request, response) => {
    const { id } = request.params;
    const { title, contents } = request.body;
    if( id && title && contents ){
        const publicationId = publications.filter((publication) => publication.id === id)
        if(publicationId > 0){
            const publicationUpdate = {...publicationId, title: title, contents: contents};
            publications[publications.indexOf(publicationId)] = publicationUpdate;
            response.status(200).json(publicationUpdate)
        }
        else {
            response.status(404).json({error: "No se recibió el id correcto necesario para modificar la publicación"});  
        }
    } else {
        response.status(404).json({error: "No se recibieron los parámetros necesarios para modificar la publicación"});
    }
});


//NO MODIFICAR EL CODIGO DE ABAJO. SE USA PARA EXPORTAR EL SERVIDOR Y CORRER LOS TESTS
module.exports = { publications, server };
