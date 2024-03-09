const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // check if the URL is /
        res.write('<html><head><title>Form</title></head>');
        res.write(
            '<body><form method="post" action="/process"><input name="message" /></form></body>'
        );
        res.end();
    } else if (req.url === '/process' && req.method === 'POST') {
        // check if the request method is POST and the URL is /process
        const body = []; // to store the chunks of data
        req.on('data', (chunk) => {
            // when the stream emits a data event
            body.push(chunk); // store the chunks of data
        });
        req.on('end', () => {
            // when the stream ends
            console.log('Stream ended');
            const parsedBody = Buffer.concat(body).toString();
            // concatenate the chunks of data and convert it to a string
            console.log(parsedBody);
            res.write('Thank you for submitting the form!');
            res.end();
        });
    } else {
        // if the URL is not / or /process
        res.write('Not Found');
        res.end();
    }
});

server.listen(3000); // listen on port 3000

console.log('Server is running on port 3000');
