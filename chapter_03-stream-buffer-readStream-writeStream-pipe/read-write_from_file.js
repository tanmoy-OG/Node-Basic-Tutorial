const fs = require('fs');

const readStream = fs.createReadStream(`${__dirname}/bigData.txt`); // create a read stream
const writeStream = fs.createWriteStream(`${__dirname}/output.txt`);
// create a write stream

readStream.on('data', (chunk) => {
    // when the stream emits a data event
    console.log(chunk.toString()); // convert the chunk to a string and log it
    writeStream.write(chunk); // write the chunk to the write stream
});
