var express = require("express");
var router = express.Router();

// router.post("/main", (req, res) => {
//   //console.log(req.body);//이렇게 입력하고, 포스트맨에서 Body - raw - JSON sending하면 업데이트가 됨.
//   const data = req.body.data;
//   //res.send("문자열이 응답됩니다."); //send 문자열이 응답할 수 있음
//   // res.json({
//   //   // json 객체 응답
//   //   message: "json 응답",
//   // });
//   res.render("index"); //html템플릿 파일들. view파일들을 적어주면 렌더링 되는 함수
// });

// router.get("/main", (req, res) => {
//   res.json({
//     messge: "main success!!",
//   });
// }); //get, post, put, delete HTTP메서드를 활용해서 1차적으로 메서드에 관한 요청을 처리. 포스트맨에서 이 메서드 이름들 일치 시켜줘야함.
//http://localhost:3000/ -> {"messge": "success!!"}, '/' 뒤에 어떤 url이 오느냐에 따라 달라지게 설정할 수 있음.
//콜백으로 나오는 req 요청에 대한 데이터를 받고 싶을 때, res 응답을 하고싶을 때.

// GET method

router.get("/read", (req, res) => {
  //요청을 받았을 때, 응답을 보내야하기 때문에
  res.status(200).json({
    //json형식으로 응답을 받음.
    message: "read success",
  }); //정상적으로 응답해줄 것을 명시해줌.
});

// POST method DB에 데이터를 넣을때 많이 씀. 현재는 외부데이터를 쓰는 환경이 아니므로 빈 배열로 직접 추가 삭제를 하겠음.

let arr = [];
router.post("/create", (req, res) => {
  //const data = req.body.data; //비구조화 할당 전
  const { data } = req.body; //비구조화 할당 후, 접근하는 키값과 상수명이 같으므로.
  arr.push(data);
  res.status(200).json({
    message: "create success",
    result: arr, //빈배열에 postman에서 임의로 입력한 객체값 data가 push되어 그 결과값이 그대로 보이게됨.
  });
}); //postman에서 post, url을 /create로 설정하고 body에서 json을 선택한뒤, postman에서 객체를 작성해준다. 그럼 콘솔창에서 확인이 가능하다.

// PUT method
// update/0의 경우 배열에서 1번째 데이터가 수정됨
router.put("/update/:id", (req, res) => {
  // 배열의 id값을 이용해서 데이터를 변경해보자.
  const { id } = req.params;
  // console.log(id);
  const { data } = req.body;
  arr[id] = data;
  res.status(200).json({
    meassage: "update success",
    result: arr,
  });
});

// DELETE method
router.delete("/delete/:id", (req, res) => {
  //postman에서 DELETE, delete/id 를 입력하고 send하면 배열에서 해당 id값을 가진 데이터가 삭제된다.
  const { id } = req.params;
  arr.splice(id, 1);
  res.status(200).json({
    message: "delete success",
    result: arr,
  });
});

module.exports = router;

// HTTP메서드
// 서버에 요청을 보내는 방법, 서버에 요청을 보낼때 해당 요청이 어떤 목적과 의도를 가졌는지 메서드를 통해 나타낸다.
// GET  요청 받은 정보를 검색(READ)하여 응답
// POST 요청된 자원을 생성(CREATE)
// PUT  요청된 자원을 구정(UPDATE)
// DELETE 요청된 자원을 삭제(DELETE)
