import { sum, substract, multiply, divide } from "../myFunctions/do-some-math";

describe("Sum functions test", () => {
  it("두가지 값을 더합니다.", () => {
    expect(sum(1, 1)).toBe(2);
    expect(sum()).toBe(0);
    expect(sum(0, 0)).toBe(0);
  });
});

describe("Substract functions test", () => {
  it("두가지 값을 뺍니다.", () => {
    expect(substract(2, 1)).toBe(1);
    expect(substract()).toBe(0);
    expect(substract(0, 2)).toBe(-2);
  });
});

describe("Multiply functions test", () => {
  it("두가지 값을 곱합니다.", () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply()).toBe(0);
    expect(multiply(-1, 2)).toBe(-2);
    expect(multiply(3.1, 2)).toBe(6.2);
    expect(multiply(-2, -3)).toBe(6);
  });
});

describe("Divide functions test", () => {
  it("두가지 값을 나눕니다.", () => {
    expect(divide(3, 4)).toBe(0.75);
    // 에러일때를 예외처리 해주기위해 함수를 expect해놓음
    expect(() => divide()).toThrowError("0으로 나눌 수 없습니다.");
    expect(divide(-2, 0.1)).toBe(-20);
  });
});
