const http = require('http');

const server = http.createServer((request, response) => {
    const requestUrl = request.url;
    // console.log('Request URL:', requestUrl);
    const requestMethod = request.method;
    // console.log('Request Method:', requestMethod);
    // response.end('Hello World!');

    if (requestUrl === "/home") {
        response.end("Home Page");
    }
    if (requestUrl === "/users") {
        response.end("List of Users");
    }
});

server.listen(3000)