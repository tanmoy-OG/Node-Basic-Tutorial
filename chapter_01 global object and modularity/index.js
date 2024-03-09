const people = require('./people'); // import the people module

console.log(__dirname); // log the directory name
console.log(__filename); // log the file name
console.log(people); // log the people module
console.log(people.people); // log the people object
console.log(people.a); // log the a property of the people object
people.test(); // call the test method of the people object
