const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 60006; // 사용하고자 하는 포트 번호로 변경

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'build', req.url);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.end('Not Found');
    } else {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(data);
    }
  });
});

server.listen(port, () => {
  console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
});
