const {sumar} = require("../index");

beforeEach(() => {
    console.log("Esto lo hare antes de cada test");
    //Un ejemplo de usar esto serìa en el caso de que durante los test modifico una variable que necesito utilizar con su valor original en los test siguientes. Bueno con esto puedo restaurarla a su valor.
})

xdescribe("La función sumar", () => {

    it("Debe ser una función", () => {
        expect(typeof sumar).toBe("function"); //Espero que el tipo de variable de sumar sea una función.
        expect(typeof sumar).not.toBe("number"); //Espero que el tipo de variable de sumar no sea un número.
    });
    
    it("Debe arrojar un error en caso de recibir algo que no sea un número", () => {
        expect(()=>{sumar("holis","tukis")}).toThrow("Los parámetros deben ser números");
        expect(()=>{sumar("holis",5)}).toThrow("Los parámetros deben ser números");
        expect(()=>{sumar(2,"tukis")}).toThrow("Los parámetros deben ser números");
    });

    it("Debe retornar el resultado de la suma correctamente", () => {
        expect(sumar(5, 8)).toBe(13);
        expect(sumar(2, 10)).toBe(12);
        expect(sumar(0, 0)).toBe(0);
        expect(sumar(-7,7)).toBe(0);
    });
})