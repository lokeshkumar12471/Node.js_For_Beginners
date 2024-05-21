var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('data.json', (err, data) => {
        res.write(data);
        res.end();
        console.log('Server is running on port 3000');
    })
}).listen(3000);