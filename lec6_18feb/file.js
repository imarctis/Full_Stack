const http = require('http');

const server = http.createServer((request, response) => {
    const requestUrl = request.url;
    const requestMethod = request.method;
// Check if log.txt exists, if not create it
// Keep on adding the requestUrl to log.txt
    const fs = require('fs');
    fs.appendFile("log.txt", requestUrl + "\n", (err) => {
        if (err) {
            console.error("Error writing to log file:", err);
        }
    });

    if (requestUrl === "/home") {
        response.end("Home Page");
    }
    if (requestUrl === "/systemConfig") {
        const freeMemory = 'Free Memory: ' + (os.freemem() /1024/1024/1024) + ' GB';
        response.end(freeMemory);
    }
});

server.listen(3000)