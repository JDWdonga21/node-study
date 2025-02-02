// npm init 이 프로젝트는 npm 프로젝트이다 npm rank 순위 확인해봐라!
//서버는 폴더 관리다!

//express 쓰자 npm install express
const express = require('express');
const helmet = require('helmet');
const app = express(); // express는 함수 형태이고 서버를 만들 때 필요한 것들을 리턴한다.
// 보안 npm install helmet 
app.use(helmet()); // use? 미들웨어 : 사이트 -> 요청 -> 미들웨어(middleware()) -> node.js


// 주소를 만듬
app.get("/", function(req, res){
    res.send('Hello Would1');
})
// about 화면
app.get("/about", function(req, res){
    res.send('안녕하세요. 소개입니다.');
})
// 3000번 포트 서버 실행
app.listen(3000, function(req, res){
    console.log("서버가 실행되었다.");
})
// node app.js 실행법! 
// npm install supervisor -g 슈퍼바이져, supervisor app.js