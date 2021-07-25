import calculator from "../calculator";

// each of the objects in the dataset array has the pieces of a math problem.
// "add": x + y
// "subtract": x - y
// "multiply": x * y
// "divide": x / y
let dataset = [
  { x: 5, y: 10, method: "add" },
  { x: 5, y: 10, method: "subtract" },
  { x: 5, y: 10, method: "multiply" },
  { x: 5, y: 10, method: "divide" },
  { x: -12, y: 10000, method: "add" },
  { x: -12, y: 10000, method: "subtract" },
  { x: -12, y: 10000, method: "multiply" },
  { x: -12, y: 10000, method: "divide" },
  { x: 42, y: 0, method: "add" },
  { x: 42, y: 0, method: "subtract" },
  { x: 42, y: 0, method: "multiply" },
  { x: 42, y: 0, method: "divide" },
  { x: 81, y: 227, method: "add" },
  { x: 81, y: 227, method: "subtract" },
  { x: 81, y: 227, method: "multiply" },
  { x: 81, y: 227, method: "divide" },
];




//These are simple math calculations to verify ability using forEach and switch statements
describe("Calculations", () => {
  dataset.forEach((vari) => {
    test(`the ${vari.method} method with ${vari.x} and ${vari.y}`, () => {
      switch (vari.method) {
        case "add":
          expect(calculator.add(vari.x, vari.y)).toEqual(vari.x + vari.y);
          /n/;
        case "subtract":
          expect(calculator.subtract(vari.x, vari.y)).toEqual(vari.x - vari.y);
          /n/;
        case "multiply":
          expect(calculator.multiply(vari.x, vari.y)).toEqual(vari.x * vari.y);
          /n/;
        case "divide":
          expect(calculator.divide(vari.x, vari.y)).toEqual(vari.x / vari.y);
          /n/;
        default:
      }
    });
  });
});

  
//This is a test to verify the correct outcome for each problem
describe("outcome", () => {
  test("simple math", () => {
    expect(calculator.add(5, 10)).toBe(15);
    expect(calculator.subtract(5, 10)).toBe(-5);
    expect(calculator.multiply(5, 10)).toBe(50);
    expect(calculator.divide(5, 10)).toBe(0.5)

    expect(calculator.add(-12, 10000)).toBe(9988);
    expect(calculator.subtract(-12, 10000)).toBe(-10012);
    expect(calculator.multiply(-12, 10000)).toBe(-120000);
    expect(calculator.divide(-12, 10000)).toBe(-0.0012)
  
    expect(calculator.add(42, 0)).toBe(42);
    expect(calculator.subtract(42, 0)).toBe(42);
    expect(calculator.multiply(42, 0)).toBe(0);
    expect(calculator.divide(42, 0)).toBe(Infinity)
    
    expect(calculator.add(81, 227)).toBe(308);
    expect(calculator.subtract(81, 227)).toBe(-146);
    expect(calculator.multiply(81, 227)).toBe(18387);
    expect(calculator.divide(81, 227)).toBe(0.3568281938325991)
  });

});


