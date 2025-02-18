import saludarEspaniol from "./saludadorEspaniol";
describe("Saludador Español Masculino", ()=>{
  it("Deberia saludar en la maniana a en forma joven",()=>{
      expect(saludarEspaniol("Jhessael","M",17,10)).toEqual("Buenos dias Joven Jhessael");
  })
  it("Deberia saludar en la Tarde en forma joven",()=>{
      expect(saludarEspaniol("Jhessael","M",17,13)).toEqual("Buenas tardes Joven Jhessael");
  })
  it("Deberia saludar en la Noche en forma joven",()=>{
      expect(saludarEspaniol("Jhessael","M",17,22)).toEqual("Buenas noches Joven Jhessael");
  })
  it("deberia saludar para la maniana en forma de senior", ()=>{
      expect(saludarEspaniol("Jhessael","M",22,8)).toEqual("Buenos dias Señor Jhessael");
  });
  it("deberia saludar para la tarde en forma de senior", ()=>{
      expect(saludarEspaniol("Jhessael","M",22,13)).toEqual("Buenas tardes Señor Jhessael");
  });
  it("deberia saludar para la noche en forma de senior", ()=>{
      expect(saludarEspaniol("Jhessael","M",22,22)).toEqual("Buenas noches Señor Jhessael");
  });
})

describe("Saludador Español Femenino", ()=>{
  it("Deberia saludar en la maniana a en forma seniorita",()=>{
      expect(saludarEspaniol("Maria","F",17,10)).toEqual("Buenos dias Señorita Maria");
  })
  it("Deberia saludar en la Tarde en forma joven",()=>{
      expect(saludarEspaniol("Maria","F",17,13)).toEqual("Buenas tardes Señorita Maria");
  })
  it("Deberia saludar en la Noche en forma joven",()=>{
      expect(saludarEspaniol("Maria","F",17,22)).toEqual("Buenas noches Señorita Maria");
  })
  it("deberia saludar para la maniana en forma de senior", ()=>{
      expect(saludarEspaniol("Maria","F",22,8)).toEqual("Buenos dias Señora Maria");
  });
  it("deberia saludar para la tarde en forma de senior", ()=>{
      expect(saludarEspaniol("Maria","F",22,13)).toEqual("Buenas tardes Señora Maria");
  });
  it("deberia saludar para la noche en forma de senior", ()=>{
      expect(saludarEspaniol("Maria","F",22,22)).toEqual("Buenas noches Señora Maria");
  });
})
