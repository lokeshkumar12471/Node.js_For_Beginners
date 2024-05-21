var url = require('url');
var adrs = 'http://localhost:3000/home.html?year=1039&month=feb';
var q = url.parse(adrs, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);