// npm init 이 프로젝트는 npm 프로젝트이다
//서버는 폴더 관리다!

//express 쓰자 npm install express
const express = require('express');
const app = express(); // express는 함수 형태이고 서버를 만들 때 필요한 것들을 리턴한다.

// 주소를 만듬
app.get("/", function(req, res){
    res.send('Hello Would');
})
// 3000번 포트 서버 실행
app.listen(3000, function(req, res){
    console.log("서버가 실행되었다.")
})
// node app.js 실행법!