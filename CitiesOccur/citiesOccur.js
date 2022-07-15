/*

Cities Occur

Write a function that logs the 5 cities that occur the most in the array below in
order from the most number of occurrences to least.

*/

const citiesOccur = (cities) => {
  if (cities?.length) {
    let citiesOccur = [];

    cities.forEach((city) => {
      citiesOccur[city] = !citiesOccur[city] ? 1 : (citiesOccur[city] += 1);
    });
    citiesOccur = Object.keys(citiesOccur)
      .map((city) => ({ name: city, times: citiesOccur[city] }))
      .sort((a, b) => b.times - a.times)
      .slice(0, 5)
      .map((city) => city.name);

    return citiesOccur;
  }

  return "Invalid array";
};

module.exports = citiesOccur;
