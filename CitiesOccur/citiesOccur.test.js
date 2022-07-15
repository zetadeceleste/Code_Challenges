const citiesOccur = require("./citiesOccur");

const citiesList1 = [
  "New York City",
  "Los Angeles",
  "Chicago",
  "Chicago",
  "Mountain View",
  "New York City",
  "Los Angeles",
  "Los Angeles",
  "New York City",
  "New York City",
  "Denver",
];

const citiesOcurr1 = [
  "New York City",
  "Los Angeles",
  "Chicago",
  "Mountain View",
  "Denver",
];

const citiesList2 = [
  "Mountain View",
  "Mountain View",
  "Mountain View",
  "Denver",
  "Boston",
  "New York City",
  "Los Angeles",
  "Chicago",
  "New York City",
  "Los Angeles",
];

const citiesOcurr2 = [
  "Mountain View",
  "New York City",
  "Los Angeles",
  "Denver",
  "Boston",
];

const citiesList3 = ["New York City"];

describe("cities occur", () => {
  test("should return citiesObj1 if recieves citiesList1", () => {
    const expected = citiesOcurr1;
    const result = citiesOccur(citiesList1);
    expect(result).toStrictEqual(expected);
  });
  test("should return citiesObj1 if recieves citiesList2", () => {
    const expected = citiesOcurr2;
    const result = citiesOccur(citiesList2);
    expect(result).toStrictEqual(expected);
  });
  test("should return ['New York City'] if recieves citiesList3", () => {
    const expected = ["New York City"];
    const result = citiesOccur(citiesList3);
    expect(result).toStrictEqual(expected);
  });
});
