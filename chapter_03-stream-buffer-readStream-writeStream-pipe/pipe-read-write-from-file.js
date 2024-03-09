const fs = require('fs');

const readStream = fs.createReadStream(`${__dirname}/bigData.txt`);
const writeStream = fs.createWriteStream(`${__dirname}/output.txt`);

readStream.on('data', () => {
    // when the stream emits a data event
    readStream.pipe(writeStream); // pipe the read stream to the write stream
});
