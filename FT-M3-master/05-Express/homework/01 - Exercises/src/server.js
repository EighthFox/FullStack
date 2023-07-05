const express = require("express");

let publications = [];
let id = 0;

const server = express();

server.use(express.json());

server.post("/posts", (request, response) => {
    const { author, title, contents } = request.body;
    if( author && title && contents ){
        const newPublic = {
            id: ++id,
            author,
            title,
            contents
        }
        publications.push(newPublic);
        response.status(200).json(newPublic);
    } else {
        response.status(422).json({error: "No se recibieron los parámetros necesarios para crear la publicación"});
    }
});

server.get("/posts", (request, response) => {
    const { author, title } = request.query;
    const samePublications = publications.filter((publication) => {
        return publication.author === author && publication.title === title
    })
    if(samePublications.length) 
        response.status(200).json(samePublications);
    else 
        response.status(422).json({error: "No existe ninguna publicación con dicho título y autor indicado"});
});

server.get("/posts/:author", (request, response) => {
    const { author } = request.params;
    const publicationAuthor = publications.filter((publication) => {
        publication.author === author
    })
    if(publicationAuthor.length){
        response.status(200).json(publicationAuthor);
    } else {
        response.status(404).json({error: "No existe ninguna publicación del autor indicado"});
    }
});

server.put("/posts/:id", (request, response) => {
    const { id } = request.params;
    const { title, contents } = request.body;
    if( id && title && contents ){
        const publiId = publications.find((publication) => publication.id === parseInt(id))
        if(publiId){
            publiId.title = title;
            publiId.contents = contents;
            response.status(200).json(publiId)
        }
        else {
            response.status(404).json({error: "No se recibió el id correcto necesario para modificar la publicación"});  
        }
    } else {
        response.status(404).json({error: "No se recibieron los parámetros necesarios para modificar la publicación"});
    }
});

server.delete("/posts/:id", (request, response) => {
    const { id } = request.params;
    if( id ){
        // const publicationId = publications.filter((publication) => publication.id === id)
        const publicationId = publications.find((publication) => publication.id === parseInt(id))
        if(publicationId){
            // delete publications[publications.indexOf(publicationId)];
            publications = publications.filter((publication) => publication.id !== id)
            response.status(200).json({ success: true })
        }
        else {
            response.status(404).json({error: "No se recibió el id correcto necesario para eliminar la publicación"});  
        }
    } else {
        response.status(404).json({error: "No se recibió el id de la publicación a eliminar"});
    }
});


//NO MODIFICAR EL CODIGO DE ABAJO. SE USA PARA EXPORTAR EL SERVIDOR Y CORRER LOS TESTS
module.exports = { publications, server };
