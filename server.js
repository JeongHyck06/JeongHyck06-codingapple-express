const express = require('express');
const app = express();

app.listen(8080, () => {
    console.log('http://localhost:8080 에서 서버 실행중');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/news', (req, res) => {
    res.send('뉴스 페이지임');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html');
});

