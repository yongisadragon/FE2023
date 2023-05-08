let start = Date.now();

const result = (x) => {
  console.log(`${x}가 실행되는데 걸리는 시간: ${Date.now() - start}`);
}; //변수 start과 Date.now()이 걸리는 시간의 차이는 있을거임.

// const blocking = () => {
//   let i = 0;
//   while (i < 99999999) {
//     i++;
//   }
//   return "blocking finished";
// };
// 일반적으로 처리가 오래걸리는 함수를 생성했다.

// 위와 같이 처리 시간이 오래 걸리는 애들을 promise로 처리한다.. js가 이 코드를 처리하느라 멈추는걸 원하지 않기 때문에.

const asyncBlocking = () => {
  //위 함수를 프라미스로 만들어보자!
  return new Promise((resolve, reject) => {
    let i = 0;
    while (i < 99999999) {
      i++;
    }
    // return "blocking finished";
    resolve("blocking finished");
  });
};

result("동기식 코드1");
setTimeout(() => {
  result("setTimeout finished");
}, 0); //설정한 시간 뒤에, 콜백함수를 실행. 여기서 의문.. 동기식 코드 1,2 다음 얘와 then을 포함한 결과중 누가 먼저 찍힐지는.. 실행했을때 100이하이므로 setTimeout이 100이므로 제일 늦게 출력될 것이다. 아니 근데 시간을 0으로 해도 끝까지 마지막에 나오네! 이건 이유가 뭘까. 동기적으로 함수를 처리하는 js는 메인스레드 위에 함수들을 올려놓고 진행하는데, 오래 걸릴거 같은 func들을 Side Thread를 생성해서 함수를 옮겨  처리한 뒤, 동작을 처리하고 실행이 종료되면 그 결과를 다시 메인쓰레드로 가져와 브라우저에 반영한다. 이 모든 흐름은 이벤트루프(event loop)위에서.. 하지만 메인과 사이드의 함수가 충돌하는 경우 race condition problem이라고함.
//이 교통정리를 task queues 라고 함. queue(대기줄)라는 자료구조는 선입선출의 규칙을 따름. 사이드에서 처리 끝난 애들은 충돌이 예상되는 애들을 테스크 큐를 통해 교통 정리.. 테스크 큐에는 메크로, 마이크로 테스크가 있다.. 메크로 테스크에(setTimeout(), setInterval() 등의 콜백 비동기 함수는 여기 속함) 메인 스레드 위 함수들이 다 끝나면 그 다음 실행(걍 꼴찌라고 보셈), 마이크로 테스크 큐는(Promise의 then으로 실행되는 비동기 콜백함수)차례가 되면 바로 메인스레드에 올라타서 실행됨. 이 모든 작업은 이벤트 루프에 의해 처리되는 것 잊지말고! 그니까 정리하면 setTimeout가 가장 늦게 나오는 이유는 메크로 테스크큐에 작업을 예약하는 비동기 콜백 함수이기 때문임.

// result(blocking());
// promise객체를 만드는 과정은 동기적으로 진행됩니다!
// result(asyncBlocking()); //[object Promise], 프라미스 객체를 반환
result(
  asyncBlocking().then((txt) => {
    //resolve 됐다면 then을 실행 할 수 있음.
    //blocking finished, then의 인자는 resolve("blocking finished");에 전달된 인자. 결과적으로는 then이 있는 이 코드는 마지막 result 보다 늦게 나오므로 비동기적으로 실행됨을 알 수 있다.
    result(txt);
  })
);
result("동기식 코드2");
