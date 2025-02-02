const express = require('express');
const router = express.Router();

// 주소를 만듬
router.get("/", function(req, res){
    res.send('Hello Would1');
})
// about 화면
router.get("/about", function(req, res){
    res.send('안녕하세요. 소개입니다.');
})

module.exports = router