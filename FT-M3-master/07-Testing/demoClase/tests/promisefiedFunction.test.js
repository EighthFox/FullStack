const {promisefiedFunction} = require("../index");

beforeAll(() => {
    console.log("Estoy haciendo algo que necesito que se haga antes de arrancar el test");
    console.log("Ejemplo: Me conecto a una BDD a la que pediré información")
});

afterAll(() => {
    console.log("Debo cerrar la conexión con la BDD");
})

xdescribe("PromisefiedFunction", () => {
    it("Debe resolverse al valor OK", () => {
        // expect(promisefiedFunction()).toEqual("OK"); esto retorna una promesa pendiente
        return promisefiedFunction().then((value) => { //Manejo la promesa
            expect(value).toEqual("OK"); //Chequeo que lo que reciba sea lo que corresponde
        });
    });
})