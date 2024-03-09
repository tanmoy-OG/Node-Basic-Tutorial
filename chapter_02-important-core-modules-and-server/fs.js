const fs = require('fs'); // fs module

fs.readFile('test.txt', 'utf-8', (err, data) => {
    console.log(data.toString());
}); // Asynchronous

fs.writeFileSync('test.txt', 'How are you?'); // Synchronous
console.log(fs.readFileSync('test.txt', 'utf-8').toString());

fs.writeFileSync('test.txt', 'Hello Programmars'); // Overwrite
console.log(fs.readFileSync('test.txt', 'utf-8').toString());

fs.appendFileSync('test.txt', ' How are you?'); // Append
console.log(fs.readFileSync('test.txt', 'utf-8').toString());
