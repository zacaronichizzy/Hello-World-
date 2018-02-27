const http = require('http')

const port = Number(process.env.PORT) || 8080

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(port);

console.log('Server running on port ' + port)
