const http = require('http');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, 'dist');
const port = process.env.PORT || 3000;

const base = '/qsaf-framework-ghpages';

const server = http.createServer((req, res) => {
  let url = req.url;
  if (url.startsWith(base)) {
    url = url.slice(base.length);
    if (url === '') url = '/';
  }
  let filePath = path.join(root, url === '/' ? 'index.html' : url);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.end('Not found');
      return;
    }
    res.end(data);
  });
});

server.listen(port, () => {
  console.log(`Serving ${root} on http://localhost:${port}`);
});
