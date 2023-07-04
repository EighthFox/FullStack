const request = require("supertest");
const server = require("../server");

const arr = [
    {   id: 1, name: "Miguel" },
    {   id: 2, name: "Viviana"},
    {   id: 3, name: "Emiliano"}
];

describe("El servidor que acabamos de hacer", () => {
    it("Debe responder con un status 200 al hacer un request GET a '/'", async () => {
        const response = await request(server).get("/");
        expect(response.statusCode).toEqual(200);
    });

    it("Debe responder con un status 404 al hacer un request GET a '/sarasa'", async () => {
        const response = await request(server).get("/sarasa");
        expect(response.statusCode).toEqual(404);
    });


    //Este ejemplo tiene un pequeño error, nosotros nunca vamos a poder predecir los datos que vienen de la base de datos.
    it("Debe enviar información de los alumnos al hacer request GET a '/students'", async () => {
        const response = await request(server).get("/students");
        expect(response.statusCode).toEqual(200);
        expect(response.body).toEqual(arr);
    });

    //Entonces lo que se hace es que el test le diga al servidor traeme los datos de una Base de Datos particular utilizada para test y no con la que te comunicas normalmente.
});