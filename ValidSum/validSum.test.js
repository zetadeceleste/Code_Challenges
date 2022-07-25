const validSum = require("./validSum");

describe("valid sum", () => {
  test('should return "Invalid number" if recieves "1"', () => {
    const expected = "Invalid number";
    const result = validSum("1");
    expect(result).toBe(expected);
  });
  test('should return "Invalid number" if recieves "a"', () => {
    const expected = "Invalid number";
    const result = validSum("a");
    expect(result).toBe(expected);
  });
  test("should return false if recieves 2", () => {
    const expected = false;
    const result = validSum(2);
    expect(result).toBe(expected);
  });
  test("should return true if recieves 5", () => {
    const expected = true;
    const result = validSum(5);
    expect(result).toBe(expected);
  });
  test("should return false if recieves 5.5", () => {
    const expected = false;
    const result = validSum(5.5);
    expect(result).toBe(expected);
  });
  test("should return false if recieves 7", () => {
    const expected = false;
    const result = validSum(7);
    expect(result).toBe(expected);
  });
  test("should return true if recieves 8", () => {
    const expected = true;
    const result = validSum(8);
    expect(result).toBe(expected);
  });
  test("should return true if recieves 13", () => {
    const expected = true;
    const result = validSum(13);
    expect(result).toBe(expected);
  });
  test("should return true if recieves 15", () => {
    const expected = true;
    const result = validSum(15);
    expect(result).toBe(expected);
  });
  test("should return true if recieves 22", () => {
    const expected = true;
    const result = validSum(22);
    expect(result).toBe(expected);
  });
  test("should return true if recieves 1056", () => {
    const expected = true;
    const result = validSum(1056);
    expect(result).toBe(expected);
  });
});
