//File Delete Module...
var http = require('http');
var fs = require('fs');


http.createServer((req, res) => {
    fs.unlink('test.txt', (err) => {
        if (err) throw err;
        console.log('File deleted!');
    });
}).listen(4040);


//File Override Module...
var http = require('http');
var fs = require('fs');


http.createServer((req, res) => {
    fs.writeFile('test.txt', 'override', (err) => {
        res.end();
    });
}).listen(4040);

//File Append Module...
var http = require('http');
var fs = require('fs');


http.createServer((req, res) => {
    fs.appendFile('test.txt', 'Thank you', (err) => {
        res.end();
    });
}).listen(4040);


//File Read Module...
var http = require('http');
var fs = require('fs');


http.createServer((req, res) => {
    fs.readFile('test.txt', (err, data) => {
        res.write(data);
        res.end();
    })
}).listen(4040);
