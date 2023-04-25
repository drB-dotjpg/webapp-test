// Import the required modules
const http = require('http');

// Create a server object
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, {'Content-Type': 'text/html'});

  // Send the response body
  res.write('<html><body><h1>Hello, World!</h1></body></html>');
  res.end();
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
