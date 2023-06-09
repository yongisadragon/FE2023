/h[a-zA-Z0-9]llo/g 많이씀
/^hello/gm : 처음에 hello *괄호안에 ^붙으면 제외라는 뜻
/hello$/gm : 끝에 hello

1개 이상: + , {1,}

0[0-9]{2}[-.! ]?[0-9]{3,4}[-.! ]?[0-9]{4}  //전화번호 
[a-zA-Z\-\.]+@[a-zA-Z\.]+\.[a-z.]+  //이메일, -는 범위로 착각 할 수 있어서 헷갈릴만한 여지가 있는 문자,기호는 이스케이프(\)를 찾고자 하는 것 앞에 붙임

\[.*\]

[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]    # 모든 한글
[^[가-힣]+$]           # 한글만 허용
[^[가-힣\\s]+$]        # 공백 허용


// https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-%EC%A0%95%EA%B7%9C%EC%8B%9D-RegExp-%EB%88%84%EA%B5%AC%EB%82%98-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-%EC%89%BD%EA%B2%8C-%EC%A0%95%EB%A6%AC


'paullab CEO leehojun hello CEO'
// 문자열 1개만 매칭되어 변경
'paullab CEO leehojun hello CEO'.replace('CEO' , 'CTO')
// flag로 global을 줘서 전체 변경(m-다중라인, i-대소문자구분x)
'paullab CEO leehojun hello CEO'.replace(/CEO/g , 'CTO')
// 패턴을 찾아 Array로 반환
'paullab CEO leehojun hello CEO'.match(/CEO/g)
// 패턴으로 Split
'paullab CEO leehojun hello CEO'.split(/CEO/g)
// 패턴이 들어가 있으면 true 없으면 false
(/CEO/g).test('paullab CEO leehojun hello CEO')

// 알고리즘 문제 풀이할 때 주의 사항
// split을 하면 내가 원하는 갯수보다 1개가 더 추가되어 나온다
'!a!abc!abcd'.split('!')
'!!!'.split('!') // 4개
'!a!a!a'.split('!') // 4개
'a!a!a!'.split('!') // 4개

'!a!a!a'.split('!').length - 1



// 3. 일반문자열
/ hello / g

// 4. 처음과 끝
/^ hello / g
/ hello$ / g
/^ hello$ / g

// 5. 모든문자 매핑(.)
/ hello / g
/ h.llo / g
/ hello..world / g

// 6. 모든문자 매핑
/ h[eao]llo / g

// 7. 범위
/ h[a - zA - Z0 - 9]llo / g

// 8. 부정
/ h[^ ae]llo / g

// 9. 그루핑 규칙
/ (on | ues | rida) / gm //: 그룹 1로 3개 중 매칭되는 패턴 찾음
// /(?:on|ues)/gm
// /(on|ues)|(rida)/gm : 그룹1(on|ues)과 그룹2(rida)로 각각 매칭되는 패턴 찾음
/.(a | e | o)ll./ gm
// /hello (?!world)/gm : hello 뒤에 world가 오지 않는 것 (네거티브 매칭)
// /hello (?=world)/gm : hello 뒤에 world가 오는 것 (파지티브 매칭)

("hello hallo hello").match(/.(a|e|o)ll./g)
("hello hallo hello hello hi").match(/.(a|e|o)ll./g)
("hello hallo hello hello hi").match(/.[eao]ll./g)

// 10. 수량자
/*
_* : 앞에 있는 문자가 0개 ~ N개
_+ : 앞에 있는 문자가 1개 ~ N개
_? : 앞에 있는 문자가 0개 ~ 1개

{3} : 3개
{3,} : 3개 이상
{1,3} : 1개 ~ 3개

_* : 앞에 있는 문자가 0개 ~ N개 ({0,})
_+ : 앞에 있는 문자가 1개 ~ N개({1,})
_? : 앞에 있는 문자가 0개 ~ 1개 ({0,1})

/[0-9]{3}[-.* ][0-9]{4}[-.* ][0-9]{4}/gm
/[0-9]{2,3}[-.* ]?[0-9]{3,5}[-.* ]?[0-9]{4}/gm
/[0-9a-zA-Z]+@[0-9a-zA-Z]+.[a-zA-Z]+/gm
*/

// 1번 문제
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/120826?language=javascript
function solution(my_string, letter) {
  return my_string.split(letter).join('');
}
'BCBdbe'.split('B')
'BCBdbe'.split('B').join('')

// 오답 : 1개만 바꿉니다.
function solution(my_string, letter) {
  return my_string.replace(letter, '');
}
'BCBdbe'.replace('B', '')

// 오답 : 정규표현식 패턴은 문자열로 만드는 것이라 별도로 생성을 해주어야 합니다.
function solution(my_string, letter) {
  return my_string.replace(`/${letter}/g`, '');
}
'BCBdbe'.replace('B', '')
let letter = 'B'
'BCBdbe'.replace(`/${letter}/g`, '');

// 정답
function solution(my_string, letter) {
  // new RegExp(패턴으로 사용할 문자열, 플래그)
  // replace에서만 사용되는 것이 아니라 정규표현식이 들어가는 곳 모두에서 사용할 수 있습니다.
  let reg = new RegExp(letter, 'g')
  return my_string.replace(reg, '');
}

// new RegExp('B', 'g') 이렇게 사용하시거나 my_string.replace(/B/g, '')


// 2번 문제
// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120851

// 정답 유형1 : 숫자를 찾는다!
function solution(my_string) {
  return my_string
      .match(/[0-9]/g)
      .reduce((a, b) => parseInt(a) + parseInt(b), 0)
}

"aAb1B2cC34oOp".match(/[0-9]/g)
"aAb1B2cC34oOp".match(/[0-9]/g).map(x => parseInt(x)).reduce((a, b) => a + b, 0)
"aAb1B2cC34oOp"
  .match(/[0-9]/g)
  .map(x => parseInt(x))
  .reduce((a, b) => a + b, 0)
"aAb1B2cC34oOp"
  .match(/[0-9]/g)
  .reduce((a, b) => parseInt(a) + parseInt(b), 0)

// 정답 유형2 : 문자를 제거한다!
function solution(my_string) {
  return my_string
      .replace(/[^0-9]/g, '')
      .split('')
      .reduce((a, b) => parseInt(a) + parseInt(b), 0)
}

"aAb1B2cC34oOp"
  .replace(/[^0-9]/g, '')
  .split('')
  .reduce((a, b) => parseInt(a) + parseInt(b), 0)


// 3번 문제
// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120891
// 오답! null일때 length가 없습니다!
function solution(order) {
  return order.toString().match(/[369]/g).length;
}

(163009).toString().match(/[369]/g)
(0).toString().match(/[369]/g)
(10).toString().match(/[369]/g)

// 정답
function solution(order) {
  let value = order.toString().match(/[369]/g) ?? []
  return value.length;
}// 오답! null일때 length가 없으므로 null을 대비해서 ?? [] null이면 오른쪽으로 넘어가도록

function solution(order) {
  return (order.toString().match(/[369]/g) ?? []).length;
}

// 4번 문제
// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120913
// 아래와 같이 풀 수 있지만 정규표현식을 사용하면 더 간단해집니다.
// "abc1Addfggg4556b"	, n=6 일경우 
function solution(my_str, n) {
  let result = []
  for (let i = 0; i < my_str.length; i += n); //i는 0부터 시작해서 그 다음은 n=6이라고 그 다음 i=6 아래 slice는 slice(6,12)
  result.push(my_str.slice(i, i + n)); //인덱스는 첫번째가 0이니까 i+n을 해주면 n=6이라고 해도 6개씩 잘린다.
  return result;
}

// [0-9][0-9][0-9][0-9] - [0-9][0-9][0-9][0-9]
// [0-9]{1,n}

"abc1Addfggg4556b".match(/[a-zA-Z0-9]{4}/g)
"abc1Addfggg4556b".match(/[a-zA-Z0-9]{3}/g)
"abc1Addfggg4556b".match(/\w{3}/g) // 문자
"abc1Addfggg4556b".match(/\d{3}/g) // 숫자
"abc1Addfggg4556b".match(/.{3}/g) // 모든문자
"".match(/.{3}/g) // 주의 : null

// 오답
function solution(my_str, n) {
  let reg = new RegExp(`.{${n}}`, 'g') // 마지막 남은 것도 리턴해줘야 해서 오답
  return my_str.match(reg)
}

// 정답
function solution(my_str, n) {
  let reg = new RegExp(`.{1,${n}}`, 'g') //1개 이상의 문자도 포함.. n이 6이라고하면하면 1개이상 6개이하, 1 이 없으면 6개인 것들만 보여줌 이 범위를 설정해주는 이유는 n개 씩 짜르다가 뒤에 n가 이하인 열이 남아버리면 그 열까지 포함해주기 위함임. 예를 들어 18개길이의 문자열에서 n이 4로 주어지면 뒤에 2개가 남는데, 그것까지 반환해주기 위해선 최소갯수 1을 설정해준 것임. n은 1이상이라고 조건에 제시되어있음,, '.'은 어느문자든 임의의 한글자를 선택 .{1,4}라면 문자 1개이상 ~4개이하
  return my_str.match(reg)
}

function solution(my_str, n) {
  let reg = new RegExp(`\\w{1,${n}}`, 'g') // '\'를 표현하기 위해서 '\\'를 사용
  return my_str.match(reg)
}

// 5번 문제
// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120864
// 2번 문제 업그레이드
// 2번 문제 해답
function solution(my_string) {
  return my_string
      .replace(/[^0-9]/g, '')
      .split('')
      .reduce((a, b) => parseInt(a) + parseInt(b), 0) //아직 각 요소들이 문자열이기 떄문에 parseInt, 이렇게 안하면 이전 단계에서 map(el => parseInt(el)) 해줘야함
}

// 오답
function solution(my_string) {
  return my_string
      .match(/\d+/g)
      .reduce((a, b) => parseInt(a) + parseInt(b), 0)
}

// 정답
function solution(my_string) {
  return (my_string.match(/\d+/g) ?? [])
      .reduce((a, b) => parseInt(a) + parseInt(b), 0)
}

"aAb1B2cC34oOp".match(/\d/g)
"aAb1B2cC34oOp".match(/\d+/g)
"aAb1B2c111C34oO123p".match(/\d+/g)

////////////////// 그룹 연습문제 //////////////////
'gogaooogogooo'.match(/(go)/g); // ['go', 'go', 'go']
'gogaooogogooo'.match(/[go]/g); // ['g', 'o', 'g', 'o', 'o', 'o', 'g', 'o', 'g', 'o', 'o', 'o']

// 숫자 2자리와 알파벳 하나씩이 매칭되도록 다음의 패턴에서 문자열을 추출하시오.

// '87a99b00fww89e' => ['87a', '99b', '00f', '89e']
'87a99b00fww89e'.match(/[0-9][0-9][a-zA-Z]/g)
'87a99b00fww89e'.match(/([0-9][0-9])([a-zA-Z])/g) // 숫자 그룹과 문자 그룹으로 나눕니다.
'87a99b00fww89e'.match(/([0-9]{2})([a-zA-Z])/g)
'87a99b00fww89e'.match(/(\d{2})([a-zA-Z])/g)

////////////////// 그룹 연습문제 //////////////////
'gogaooogogooo'.match(/(go)/g); // ['go', 'go', 'go']
'gogaooogogooo'.match(/[go]/g); // ['g', 'o', 'g', 'o', 'o', 'o', 'g', 'o', 'g', 'o', 'o', 'o']

// 숫자 2자리와 알파벳 하나씩이 매칭되도록 다음의 패턴에서 문자열을 추출하시오.

// '87a99b00fww89e' => ['87a', '99b', '00f', '89e']
'87a99b00fww89e'.match(/[0-9][0-9][a-zA-Z]/g)
'87a99b00fww89e'.match(/([0-9][0-9])([a-zA-Z])/g) // 숫자 그룹과 문자 그룹으로 나눕니다.
'87a99b00fww89e'.match(/([0-9]{2})([a-zA-Z])/g)
'87a99b00fww89e'.match(/(\d{2})([a-zA-Z])/g)

// 6번 문제
// 링크 : https://jsalgo.co.kr/?page=2#
'a10b9r1ce33uab8wc918v2cv11v9'.match(/[rev][0-9]/g)
// ['r1', 'e3', 'v2', 'v1', 'v9']

// 아래처럼 r, e, v 뒤에 숫자가 10이 있을 경우 오답
'a10b9r10ce33uab8wc918v2cv11v9'.match(/[rev][0-9]/g)
// ['r1', 'e3', 'v2', 'v1', 'v9']

// 아래처럼 뽑으면 e가 33이 뽑히므로 오답
'a10b9r10ce33uab8wc918v2cv11v9'.match(/[rev]\d+/g)

// 아래처럼 뽑으면 v가 11이 뽑히므로 오답
'a10b9r10ce33uab8wc918v2cv11v9'.match(/[rev][1]?[0-9]/g)

// 정답
'a10b9r10ce33uab8wc918v2cv11v9'
    .match(/([rev])(10|[0-9])/g)
    .reduce((a, b) => parseInt(a) + parseInt(b), 0)
function solution(data) {
    return data.match(/([rev])(10|[0-9])/g)
}

function solution(data) {
    let result = data.match(/([rev])(10|[0-9])/g).reduce((a, c) => a + parseInt(c.slice(1)), 0).toString()
    return `${result[0]}월 ${result[1]}일`
}

// reduce 보강설명
// reduce의 형태
array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
);

[10, 20, 30].reduce(
    (accumulator, currentValue) => {
        console.log(currentValue)
        return accumulator + currentValue
    },
    0
);

['a10', 'a20', 'a30'].reduce(
    (accumulator, currentValue) => {
        console.log(currentValue)
        console.log(currentValue.slice(1))
        return accumulator + currentValue
    },
    0
);

['a10', 'a20', 'a30'].reduce(
    (accumulator, currentValue) => {
        console.log(currentValue)
        console.log(currentValue.slice(1))
        console.log(parseInt(currentValue.slice(1)))
        return accumulator + parseInt(currentValue.slice(1))
    },
    0
);

['a10', 'a20', 'a30'].reduce(
    (accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.slice(1))
    },
    0
);

['a10', 'a20', 'a30'].reduce((a, c) => a + parseInt(c.slice(1)), 0);

// 좀 더 쉽게, 그렇지만 효율적이진 않습니다.
['a10', 'a20', 'a30']
    .map(v => parseInt(v.slice(1)))
    .reduce((a, b) => a + b, 0)



// replace 매우 고급 문법 보강 설명 //
const string = `hojun, lee
gildong, hong
hojung, choi
junho, lee`


let result1 = string.replace(/(\w+), (\w+)/gm, "$2 $1");
console.log(result1);
let result2 = string.replace(/(\w+), (\w+)/gm, "$2_$1");
console.log(result2);
let result3 = string.replace(/(\w+), (\w+)/gm, "$1님 안녕하세요.");
console.log(result3);
let result4 = string.replace(/(\w+), (\w+)/gm, "$2 $1!!$1!!$1");
console.log(result4);