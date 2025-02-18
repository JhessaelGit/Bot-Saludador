import saludadorEspaniol from "./saludadorEspaniol";
describe("Saludar en Ingles", () => {
  it("Debe saludar en espaniol con los datos agregados", () => {
    expect(saludadorEspaniol("Jhessael","M",22,13)).toEqual("Buenas tardes Señor Jhessael");

  });
});


