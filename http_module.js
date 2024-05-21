//Http Module...
var http = require('http');


http.createServer((req, res) => {
    res.write('hello world');
    res.end();
    console.log('Server is running on port 4040');

}).listen(3030);
