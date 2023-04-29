var hello = "hello";

function sayHello() {
  var hello = "hello hello";
  console.log(hello); //hello hello
}

sayHello();
console.log(hello); //hello

//스코프란 변수에 접근할 수 있는 범위
//var는 오직 함수레벨에서만 스코프를 가짐짐
//let const는 블록레벨 스코프임. 블록만 있따면 그 안이 유효범위가 됨
