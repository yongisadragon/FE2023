import ColaGenerator from "./classes/colaGenerator.js"; //모듈 불러오는 키워드, js 잊지 말기.
import VendingMachineEvents from "./classes/vendingMachineEvents.js"; //모듈 불러오는 키워드

const colaGenerator = new ColaGenerator(); //인스턴스 생성
const vendingMachineEvents = new VendingMachineEvents();

//탑레벨 await 어쩌구.
(async function () {
  await colaGenerator.setup(); //콜라버튼 관련된 애들은 json을 불러와야해서 데이터 관련 처리가 되어야 하기 때문에 await해줘야함. vendingMachineEvents에 있는 애들은 동기적으로 처리돼도 상관없는 (json등을 참조하지 않아도 되는)애들
  vendingMachineEvents.bindEvent(); //해당 클래스에 있는 메서드 실행 , 참고로 제너레이터 되기전에 얘 먼저 되면 안됨
})();
