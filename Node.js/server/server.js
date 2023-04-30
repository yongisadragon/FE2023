//서버란, 클라이언트의 요청에 대한 응답을 하는 역할입니다.
const http = require("http"); //http패키지를 사용하겠다는 의미. require은 해당패키지를 불러와 사용할 수 있게함.

http //서버를 쉽게 구축할 수 있는 패키지
  .createServer((req, res) => {
    //서버를 생성하고 콜백으로 req,res를 받아서 요청과 응답을 진행하는 함수
    //요청과 응답에 대한 매개변수
    //res.writeHead(200, { "Content-dType": "text/html" }); //헤더값을 통해 숫자를 통해 상태코드(200,성공)를 보냄.
    //res.end("<p>Hello World</p>"); //응답받을 코드 설정
    if (req.url === "/") {
      //url, 요청에 맞게 분기처리 하는것을 라우팅이라고하고, 라우팅하는 것을 나중에는 express로 쉽게 해 줄 수 있다.
      res.writeHead(200); //정상(200)이라면
      res.end("main url"); //포스트맨 http://localhost:3000시 출력
    } else if (req.url === "/upload") {
      res.writeHead(200); //포스트맨 http://localhost:3000/upload시 출력
      res.end("upload url");
    } else if (req.url == "/delete") {
      res.writeHead(200);
      res.end("delete url");
    } else {
      //위의 분기처리 뒤의 요청한 라우팅에 없는 url이 입력된다면, not found 출력 . 해당 요청이 없다(404)
      res.writeHead(404);
      res.end("not found!");
    }
  })
  .listen(3000, () => {
    //서버를 대기시켜줌
    console.log("3000번 포트 서버 접속완료");
  }); //서버를 실행할 코드

//localhost란 현재 컴퓨터의 내부 주소. 컴퓨터에 접근하기 위해 필요. 서버 개발 때 테스트 용으로 많이 쓰입니다. localhost = 127.0.0.1과 같은 의미이다. 이런 주소는 IP(internet protocol)이며, 주소를 통해 서버에 접속할 수 있게 된다.
//로컬호스트를 가장 기본적인 주소로 두고, 포트(Port)라는 서버내의 프로세스를 구분하는 번호로 역할을 구분한다. 서버에서는 다양한 일을 처리하는데, 같은 주소라고 하더라도(HTTP(80), HTTPS(443), DB(27017등) 다른 포트 번호를 부여해 다양한 기능을 수행할 수 있도록 분류한다.

//Postman: 서버 개발 시 이를 테스트할 수 있는 툴 (브라우저를 통해 서버에 접근하는 것은 매우 한정적으로 접근할 수 밖에없다. postman이라는 툴을 활용하면 다양한 기능을 활용할 수 있다.) 즉, 서버에 요청을 보내고 그에대한 응답을 받는데 해당 결과값을 훨씬 쉽게 받도록 하는 툴.

//어플을 깔고, +를 누르면 다양한 HTTP메서드들을 볼 수가 있다.

//API서버: 요청을 받고 응답을 하는 서버, 클라이언트가 서버에 요청을 보내면 서버가 응답을 처리해 보내는 서버가 API서버이다.
