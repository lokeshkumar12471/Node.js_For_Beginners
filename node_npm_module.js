var http = require('http');

(async function () {
    const uc = await import('upper-case');
    http.createServer((req, res) => {
        res.write(uc.upperCase('hello world'));
        res.end();
    }).listen(3000, () => {
        console.log('Server is listening on port 3000');
    });
})();
