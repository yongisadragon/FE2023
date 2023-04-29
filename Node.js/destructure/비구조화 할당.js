// 비구조화 활당
// 객체, 배열안의 값을 추출해서 변수, 상수에 바로 선언,할당하는 문법

//기본적으로 객체 안의 키값을 받아오는 법
const object = { a: 1, b: 2 };

//일일이 하는 방법
// const a = object.a;
// const b = object.b;

const { a, b } = object; // 비구조화 할당

console.log(a);
console.log(b);

//배열의 비구조화 할당
const array = [1, 2];
const [one, two] = array;

console.log(one);
console.log(two);

