import saludadorEspaniol from "./saludadorEspaniol";
describe("Sumar", () => {
  it("deberia sumar dos numeros", () => {
    expect(saludadorEspaniol("Jhessael","M",22,13)).toEqual("Buenas tardes Señor Jhessael");

  });
});


