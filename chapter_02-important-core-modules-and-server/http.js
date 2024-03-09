const http = require('http'); // import the http module

const server = http.createServer((req, res) => {
    // create a server
    if (req.url === '/') {
        // check if the URL is /
        res.write('Hello Programmers!!'); // write a response
        res.write('How are you doing?');
        res.end(); // end the response
    } else if (req.url === '/about') {
        // check if the URL is /about
        res.write('This is About Us page');
        res.end();
    } else {
        // if the URL is not / or /about
        res.write('Not Found');
        res.end();
    }
});

server.listen(3000); // listen on port 3000

console.log('Server is running on port 3000'); // log a message
