// async function message() {
//   let hello = await new Promise((resolve) => {
//     //hello가 다될때까지 기다려!
//     setTimeout(() => {
//       resolve("hello");
//     }, 100);
//   });

//   let world = await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("world");
//     }, 100);
//   });

//   console.log(`${hello} ${world}`);
// }

// message();

// function message() {
//   new Promise((resolve) => {
//     //프라미스 객체 생성
//     setTimeout(() => {
//       resolve("hello"); //resolve로 문자열 반환
//     }, 100);
//   }).then((result) => { //직렬적으로 연결돼있음. 첫번째 프라미스의 결과가 두번째 프라미스가 영향을 받을때에는 직렬로 처리하는게 맞다. 병렬로 처리해야할 경우는 동시에 처리돼야하는 경우가 있음. 그럴때에는 promise.all().. 나중에 아라보자
//     //hello, result에는 resolve의 인자가 들어감.
//     //then이후 return없으면 반환 안됨.?? 머임
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(result + " world");
//       }, 100);
//     }).then((result2) => {
//       //world, result에는 resolve의 인자가 들어감.
//       console.log(result2);
//     });
//   });
// }

// message();

// console.log("i am sync!");
// await는 async안에서만 함수의 순서를 동기처럼 보이게 처리할 수 있다는 것이지, async바깥의 순서는 기존 실행 규칙에 의해 실행된다. 이건 코드를 실행해보면 알 수 있는데, i am sync -> (async-await에 의한)hello world 순으로 실행됨. hello와 world가 async안에서 await에 의해 진행 된 애들임.
//두번째 같은 케이스는, async-await를 사용하지 않은 promise는 then의 체이닝 때문에 코드가 길어질 수 있다.

// promise-then -> Promise.all
// function message() {
//   Promise.all([
//     //순회가능한 객체에 주어진 모든 프라미스 이행.(병렬적 실행) 배열의 원소로 promise가 들어가서 실행됨. 서로의 결과가 영향을 미치지 않는(각각 다른 API를 호출할때에도 이런 경우)경우 이렇게 병렬적으로 처리한다.
//     new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("hello");
//       }, 100);
//     }),
//     new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("world");
//       }, 100);
//     }),
//   ]).then(([helloResult, worldResult]) => {
//     //구조 분해 할당, then은 promise가 될때까지 기다리고, 아래 로그가 실행되도록 해주기 위함임.
//     console.log(`${helloResult} ${worldResult}`);
//   });
// }

// message();

// async-await -> Promise.all
async function message() {
  const [helloResult, worldResult] = await Promise.all([
    //구조 분해 할당. 배열의 요소값에 변수 처리해줌.
    //await는 fulfilled된 값을 반환한다.
    new Promise((resolve) => {
      setTimeout(() => {
        resolve("hello");
      }, 100);
    }),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve("world");
      }, 100);
    }),
  ]);

  console.log(`${helloResult} ${worldResult}`);
}

message();
