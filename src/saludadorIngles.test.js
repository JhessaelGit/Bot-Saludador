import saludarIngles from "./saludadorIngles";
describe("Saludador Ingles", ()=>{
    it("Deberia saludar en la maniana a en forma joven",()=>{
        expect(saludarIngles("Jhessael","M",17,10)).toEqual("Good Morning Young Jhessael");
    })
    it("Deberia saludar en la Tarde en forma joven",()=>{
        expect(saludarIngles("Jhessael","M",17,13)).toEqual("Good Afternoon Young Jhessael");
    })
    it("Deberia saludar en la Noche en forma joven",()=>{
        expect(saludarIngles("Jhessael","M",17,22)).toEqual("Good Evening Young Jhessael");
    })
    it("deberia saludar en para la tarde a un senior", ()=>{
        expect(saludarIngles("Jhessael","M",22,13)).toEqual("Good Afternoon Mister Jhessael");
    });
})