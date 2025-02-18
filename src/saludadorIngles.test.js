import saludarIngles from "./saludadorIngles";
describe("Saludador Ingles Masculino", ()=>{
    it("Deberia saludar en la maniana a en forma joven",()=>{
        expect(saludarIngles("Jhessael","M",17,10)).toEqual("Good Morning Young Jhessael");
    })
    it("Deberia saludar en la Tarde en forma joven",()=>{
        expect(saludarIngles("Jhessael","M",17,13)).toEqual("Good Afternoon Young Jhessael");
    })
    it("Deberia saludar en la Noche en forma joven",()=>{
        expect(saludarIngles("Jhessael","M",17,22)).toEqual("Good Evening Young Jhessael");
    })
    it("deberia saludar en para la maniana en forma de senior", ()=>{
        expect(saludarIngles("Jhessael","M",22,8)).toEqual("Good Morning Mister Jhessael");
    });
    it("deberia saludar en para la tarde en forma de senior", ()=>{
        expect(saludarIngles("Jhessael","M",22,13)).toEqual("Good Afternoon Mister Jhessael");
    });
    it("deberia saludar en para la noche en forma de senior", ()=>{
        expect(saludarIngles("Jhessael","M",22,22)).toEqual("Good Evening Mister Jhessael");
    });
})

describe("Saludador Ingles Femenino", ()=>{
    it("Deberia saludar en la maniana a en forma seniorita",()=>{
        expect(saludarIngles("Maria","F",17,10)).toEqual("Good Morning Miss Maria");
    })
    it("Deberia saludar en la Tarde en forma joven",()=>{
        expect(saludarIngles("Maria","F",17,13)).toEqual("Good Afternoon Miss Maria");
    })
    it("Deberia saludar en la Noche en forma joven",()=>{
        expect(saludarIngles("Maria","F",17,22)).toEqual("Good Evening Miss Maria");
    })
    it("deberia saludar en para la maniana en forma de senior", ()=>{
        expect(saludarIngles("Maria","F",22,8)).toEqual("Good Morning Misses Maria");
    });
    it("deberia saludar en para la tarde en forma de senior", ()=>{
        expect(saludarIngles("Maria","F",22,13)).toEqual("Good Afternoon Misses Maria");
    });
    it("deberia saludar en para la noche en forma de senior", ()=>{
        expect(saludarIngles("Maria","F",22,22)).toEqual("Good Evening Misses Maria");
    });
})
