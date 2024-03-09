const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const readStream = fs.createReadStream(`${__dirname}/bigData.txt`);
    // create a read stream
    readStream.pipe(res); // pipe the read stream to the response
});

server.listen(3000); // listen on port 3000

console.log('Server is running on port 3000');
