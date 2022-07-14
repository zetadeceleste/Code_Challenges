const winningCard = require("./winningCard");

describe("winning card", () => {
  test("should return 'Invalid array' if recieve an empty array", () => {
    const expected = "Invalid array";
    const result = winningCard([]);
    expect(expected).toBe(result);
  });
  test("should return 8 if recieve [[5,7,3,9,4,9,8,3,1], [1,2,2,4,4,1], [1,2,3]]", () => {
    const expected = 8;
    const result = winningCard([
      [5, 7, 3, 9, 4, 9, 8, 3, 1],
      [1, 2, 2, 4, 4, 1],
      [1, 2, 3],
    ]);
    expect(expected).toBe(result);
  });
  test("should return -1 if recieve [[5,5], [2,2]]", () => {
    const expected = -1;
    const result = winningCard([
      [5, 5],
      [2, 2],
    ]);
    expect(expected).toBe(result);
  });
});
