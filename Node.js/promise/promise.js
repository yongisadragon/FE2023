//비동기란 코드의 흐름을 기다리지 않고 각자 수행한 뒤, 결과값을 끝나는대로 알려주는 방식
//하지만 이러한 특성 때문에 각각의 테스크들이 언제 끝날지 모르는 상황이 올 수 있음.. 순차적으로 일을 수행하고 싶은 경우, 비동기적 특성 때문에 일의 순차적으로 할 수 없는 경우가 생긴다. 자바스크립트에서는 콜백 함수를 이용해서 뒤 이어서 함수를 실행하여 일련적인 플로우를 만들어주는 역할을 함. 하지만 콜백 지옥이 발생할 수 있다.
//js에서는 promise를 이용해서 콜백지옥을 탈출 할 수 있었다.

//promise 3가지 상태
//pending 대기
//fulfilled 이행
//rejected 실패

//성공시 resolve, 실패시 reject
function sayHello() {
  return new Promise((resolve, reject) => {
    const hello = "Hello Hello";
    resolve(hello);
  });
}

//성공시, 함수 사용 뒤, then을 이용해서 promise를 실행
//성공적으로 실행 뒤 hello라는 상수값을 resolve에 넘겨주게 됐고, resolve를 통해 resolveData에 hello라는 스트링 값이 들어가게 됨..
sayHello().then((resolveData) => {
  //Hello Hello
  console.log(resolveData);
});

//그렇다면 실패시? 에러케이스시 reject를 이용해서 에러를 핸들링함.
function sayHello() {
  return new Promise((resolve, reject) => {
    reject(new Error());
  });
}

sayHello()
  .then((resolveData) => {
    console.log(resolveData);
    return resolveData;
  })
  .catch((error) => {
    //에러 발생시 catch로 에러를 받음
    console.log(error); //reject에러 발생
  });

//그렇다면 연속으로 then을 써서 promise를 쓰고 싶을 때, 여기서 resolveData데이터는 앞선 return값으로 정해짐. 그래서 앞의 then에 return이 있으면 다음 then의 매게 변수로 넘어가게됨.
//그렇다면 연속적으로 then을 언제쓴다구? 나중에 서버개발을 할 때, 회원가입등의 절차를 짤때 로그인을 할때 정말 회원이 맞는지 데이터베이스 조회, 문자열 조희.. 일련의 흐름들을 then을 이용해 조회
function sayHello() {
  return new Promise((resolve, reject) => {
    resolve("hello!");
    //then에 의해 hello! 3번 출력
  });
}

sayHello()
  .then((resolveData) => {
    console.log(resolveData);
    return resolveData;
  })
  .then((resolveData) => {
    console.log(resolveData);
    return resolveData;
  })
  .then((resolveData) => {
    console.log(resolveData);
  })
  .catch((error) => {
    console.log(error);
  });

//이렇게 한다고 해도, then을 많이 쓰면 then자체도 복잡해지는 문제점이 생김.
//그럴때 사용하는것이 async-await

function sayHello() {
  return new Promise((resolve, reject) => {
    resolve("hello!");
  });
}

//proimise 자체가 비동기로 실행되기 때문에 await이 없으면 밑에있는 코드들이 바로 실행이 될 수 있기 때문에 await 뒤에 있는 것이 실행되고 난 다음에, 밑에 것들을 실행시키겠다- 라는 말
async function test() {
  const hello1 = await sayHello();
  console.log(hello1);
}

test();
