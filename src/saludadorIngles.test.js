import saludarIngles from "./saludadorIngles";
describe("Saludador Ingles", ()=>{
    it("deberia saludar en ingles", ()=>{
        expect(saludarIngles("Jhessael","M",22,13)).toEqual("Good Afternoon Mister Jhessael");
    });
})