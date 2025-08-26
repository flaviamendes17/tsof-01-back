import { somar, subtrair } from "../src/calculadora.js";

describe("Calculadora", () => {
    test("deve somar dois números corretamente", () => {
        const a = 5;
        const b = 7;

        const resultado = somar(a, b);

        expect(resultado).toBe(12);
    });
    test("deve subtrair dois números corretamente", () => {
        const a = 5;
        const b = 7;

        const resultado = subtrair(a, b);

        expect(resultado).toBe(-2);
    });
})