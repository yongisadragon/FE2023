var express = require("express");
var router = express.Router();

router.post("/main", (req, res) => {
  //console.log(req.body);//이렇게 입력하고, 포스트맨에서 Body - raw - JSON sending하면 업데이트가 됨.
  const data = req.body.data;
  //res.send("문자열이 응답됩니다."); //send 문자열이 응답할 수 있음
  // res.json({
  //   // json 객체 응답
  //   message: "json 응답",
  // });
  res.render("index"); //html템플릿 파일들. view파일들을 적어주면 렌더링 되는 함수
});

// router.get("/main", (req, res) => {
//   res.json({
//     messge: "main success!!",
//   });
// }); //get, post, put, delete HTTP메서드를 활용해서 1차적으로 메서드에 관한 요청을 처리. 포스트맨에서 이 메서드 이름들 일치 시켜줘야함.
//http://localhost:3000/ -> {"messge": "success!!"}, '/' 뒤에 어떤 url이 오느냐에 따라 달라지게 설정할 수 있음.
//콜백으로 나오는 req 요청에 대한 데이터를 받고 싶을 때, res 응답을 하고싶을 때.

module.exports = router;
