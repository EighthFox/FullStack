//require("./src/db"); //Para poder ejecutar un archivo en el index que es el que esta utilizando nodemon.
const server = require('./src/server');
const { database } = require('./src/db');

//Sincronización del server con la base de datos y quiero que suceda cuando se ejecute la aplicación por eso esto va en index.js

database
  .sync({ alter: true }) //Cada vez que se sincronice con la base de datos, borrala toda y volvela a crear de nuevo con las tablas basadas en los modelos. Esto solo sirve durante el desarrollo y pruebas. Porque si me olvidé de algún dato para la tabla, la borra y la vuelve a crear como corresponde. Por eso el true va a durar poco, si no queremos que borre las tablas, ponemos false.
  .then(() => {
    server.listen(3001, () => {
    console.log("Listening on port 3001")
    });
  })
  .catch(error => console.log(error));



