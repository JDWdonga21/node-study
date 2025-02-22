const express = require('express');
const router = express.Router();

// 주소를 만듬
router.get("/", function(req, res){
    // res.send('Hello Would1');
    // 서버에서 데이터를 같이 프론트로 넘길 수 있음.
    res.render('index', {title : '메인 화면'}); //app.js view 파일 위치를 지정해두었기에 이름만 적으면 됨됨
    // res.render('admin/index'); 
})
// about 화면
router.get("/about", function(req, res){
    res.send('안녕하세요. 소개입니다.');
})
// api 만들기
router.get("/myApi", function(req, res){
    /**
     * - GET 방식에서 데이터를 서버로 전달할 땐, 주소 뒤에 키와 벨류 형태로 보냅니다.
     * - [www.api.com?key=value?key2=value2](http://www.api.com/?key=value?key2=value2)
     */
    let query = req.query;
    console.log(query);
    console.log(query.page);
    
    res.send({"key" : "value"});
})
// post api
router.post("/postapi", function(req, res){
    let body = req.body;
    console.log(body);
    res.send('Post API');
})

module.exports = router