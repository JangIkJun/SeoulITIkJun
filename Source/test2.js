var http  = require('http');

http.createServer(function (res, res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Helllo World!\n');

}).listen(8000, '127.0.0.1');

console.log('Server running at http://127.0.0.1:8000/');