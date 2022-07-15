/*
Inmutable Name

Create an Object with a "hello" method that writes "Hello <name>"
How would you make the name inmutable?

*/

let inmutableName = {
  name: "Inmutable Name",
  hello: () => `Hello <${inmutableName.name}>`,
};

Object.freeze(inmutableName);

module.exports = inmutableName;
