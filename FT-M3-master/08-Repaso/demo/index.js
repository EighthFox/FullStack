// nuestro index se va a encargar de levantar nuestro servidor
const server = require("./src/app");

server.listen("3001", ()=>{
    console.log("server listening on port 3001")
});