// npm init 이 프로젝트는 npm 프로젝트이다 npm rank 순위 확인해봐라!
//서버는 폴더 관리다!

// 서버 안에서 api는 주소를 뜻한다. get, post

//express 쓰자 npm install express
const express = require('express');
const helmet = require('helmet');
const app = express(); // express는 함수 형태이고 서버를 만들 때 필요한 것들을 리턴한다.
const ejs = require("ejs"); //ejs가 필요함

// 확장자 명이 ejs인 html 파일을 만들면 된다.
app.set('view engine', 'ejs');
app.set('views', './views');
// /public을 쓰면 __dirname+ '/public' 여기서 가져와라! 규칙을 만든 것
app.use('/public', express.static(__dirname+ '/public'));

// 보안 npm install helmet 
app.use(helmet()); // use? 미들웨어 : 사이트 -> 요청 -> 미들웨어(middleware()) -> node.js

//post 방식은 인코딩이 필요함
app.use(express.json());
app.use(express.urlencoded());

const mainRouter = require('./router/mainRouter');
app.use('/',mainRouter);
// app.use('별도로 설정 가능',mainRouter);


// // 주소를 만듬
// app.get("/", function(req, res){
//     res.send('Hello Would1');
// })
// // about 화면
// app.get("/about", function(req, res){
//     res.send('안녕하세요. 소개입니다.');
// })



// 3000번 포트 서버 실행
app.listen(3000, function(req, res){
    console.log("서버가 실행되었다.");
})
// node app.js 실행법! 
// npm install supervisor -g 슈퍼바이져, supervisor app.js