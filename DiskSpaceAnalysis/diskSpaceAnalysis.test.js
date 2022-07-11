const diskSpaceAnalysis = require("./diskSpaceAnalysis");

describe("disk space analysis", () => {
  test('should return "None" if recieves []', () => {
    const expected = "None";
    const result = diskSpaceAnalysis(1, []);
    expect(expected).toBe(result);
  });
  test('should return "None" if recieves n = null', () => {
    const expected = "None";
    const result = diskSpaceAnalysis(null, [1, 2, 3]);
    expect(expected).toBe(result);
  });
  test("should return 2 if recieves n = 2 and [1, 2, 3, 1, 2]", () => {
    const expected = 2;
    const result = diskSpaceAnalysis(2, [1, 2, 3, 1, 2]);
    expect(expected).toBe(result);
  });
  test("should return 1 if recieves n = 2 and [1, 1, 1]", () => {
    const expected = 1;
    const result = diskSpaceAnalysis(2, [1, 1, 1]);
    expect(expected).toBe(result);
  });
  test("should return 4 if recieves n = 3 and [2, 5, 4, 6, 8]", () => {
    const expected = 4;
    const result = diskSpaceAnalysis(3, [2, 5, 4, 6, 8]);
    expect(expected).toBe(result);
  });
  test("should return 4 if recieves n = 2 and [8, 2, 4, 6]", () => {
    const expected = 4;
    const result = diskSpaceAnalysis(2, [8, 2, 4, 6]);
    expect(expected).toBe(result);
  });
});
