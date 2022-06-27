const http = require('node:http');
const HOST_NAME =  '127.0.0.1';
const  PORT = 3000;

const server = http.createServer((req, res) => {
  res.statusCode =  200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('hello');
});

server.listen(PORT, HOST_NAME, () => {
  console.log(`running`);
});
