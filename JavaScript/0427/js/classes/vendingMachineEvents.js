class VendingMachineEvents {
  constructor() {
    const vMachine = document.querySelector(".section1");
    this.balance = vMachine.querySelector(".bg-box p"); //잔액: ~원
    this.btnReturn = vMachine.querySelector(".bg-box+.btn"); //거스름돈 반환 버튼
    this.itemList = vMachine.querySelector(".cola-list"); //콜라 리스트 전체
    this.inputCostEl = vMachine.querySelector("#input-money"); //입금액 입력창
    this.btnPut = vMachine.querySelector("#input-money+.btn"); //입금 버튼
    this.btnGet = vMachine.querySelector(".btn-get"); //획득 버튼
    this.stagedList = vMachine.querySelector(".get-list"); //획득 목록

    const myInfo = document.querySelector(".section2");
    this.myMoney = myInfo.querySelector(".bg-box strong"); //소지금: ~원

    const getInfo = document.querySelector(".section3");
    this.getList = getInfo.querySelector(".get-list"); //획득 음료 리스트
    this.txtTotal = getInfo.querySelector(".total-price"); //총금액: ~원
  }

  stagedItemGenerator(target) {
    //함수안에서 템플릿으로 생성, 하단 장바구니(get-list)에 생성되는 li 생성해줌.

    const stagedItem = document.createElement("li"); //이미지 경로, 아이템 이름 바꿔주면 될 듯 하다.
    stagedItem.innerHTML = `
    <img src="./img/${target.dataset.img}" alt="">
    ${target.dataset.item}
    <strong>1
      <span class="a11y-hidden">개</span>
    </strong>
    `;
    this.stagedList.append(stagedItem); //같은거 2개이상 쌓일때, 새로 추가되는게 아니라 숫자만 추가되도록..
  }

  //컨스트럭트함수는 인스턴스가 생성될 때 실행됨.
  bindEvent() {
    /**-------------------------------------------기능구현 📌
     * 1. 입금 버튼 기능
     * 입근 버튼 누르면>
     * 1) 소지금 === 소지금 - 입금액
     * 2) 잔액 === 기존 잔액 + 입금액
     * 3) 입금액이 소지금보다 많을 수 없음. 많으면 경고 출력 (조상님이 넣어주시지 않음)
     * 4) 입금액이 정상적으로 입금되면 입금창(inputCostEl)초기화
     */
    this.btnPut.addEventListener("click", () => {
      const inputCost = parseInt(this.inputCostEl.value); //입금액
      const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(",", "")); //소지금: 25,000원이므로 ','를 빼줘야함.. 순수한 정수만 남게하기 위한 식
      const balanceVal = parseInt(this.balance.textContent.replaceAll(",", "")); //잔액
      //전제조건: 내 입력값이 true인가? 없으면 버튼 눌리지않게. 언제나 눌리게 되면 낭비에요.
      if (inputCost) {
        //입금액이 있다면,
        if (inputCost <= myMoneyVal && inputCost > 0) {
          //또, 입금액이 내 지값 금액보다
          //입금액이 소지금이 같거나 적다면(입금됨)
          this.myMoney.textContent =
            new Intl.NumberFormat().format(myMoneyVal - inputCost) + "원"; //출력된 숫자를 국제표준에 맞게 기호등을 넣어줌.

          this.balance.textContent =
            new Intl.NumberFormat().format(
              (balanceVal ? balanceVal : 0) + inputCost
            ) + "원"; // 삼항 연산이용, 잔액(기계돈)이 없어서 NaN상태인데, 참일 경우 그 돈 그대로. 없으면 0원 입금.
        } else {
          //입금액이 소지금 보다 많다(입금 안 됨)
          alert("소지금이 부족합니다!");
        }
        this.inputCostEl.value = null;
      }
    });

    /**-------------------------------------------
     * 2. 거스름돈 반환 버튼
     * 1) 반환버튼을 누르면 소지금 === 잔액 + 소지금
     * 2) 반환버튼을 누르면 잔액창이 초기화됩니다.
     */
    this.btnReturn.addEventListener("click", () => {
      // 잔액
      const balanceVal = parseInt(this.balance.textContent.replaceAll(",", ""));

      // 소지금
      const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(",", ""));

      if (balanceVal) {
        this.myMoney.textContent =
          new Intl.NumberFormat().format(balanceVal + myMoneyVal) + "원";
        this.balance.textContent = null;
      }
    });

    /**-------------------------------------------
     * 3. 자판기 장바구니 채우기
     * 1) 아이템을 누르면 잔액 === 잔액 - 아이템 가격
     * 2) 아이템 가격이 잔액보다 크다면 경고메세지
     * 3) 아이템이 장바구니에 들어감
     * 4) 아이템의 count가 -1 됨.(data-count 참고) count가 0이되면 품절 표시 함.
     */
    this.btnsCola = document.querySelectorAll(".section1 .btn-cola"); //콜라 버튼들

    this.btnsCola.forEach((item) => {
      //item은 콜라 버튼 하나하나
      item.addEventListener("click", (event) => {
        // 잔액
        const balanceVal = parseInt(
          this.balance.textContent.replaceAll(",", "")
        );
        const targetElPrice = parseInt(event.currentTarget.dataset.price); //리스너 달려있는 놈, dataset은 해당요소 data에 접근하는 메서드
        console.log(targetElPrice);
        if (balanceVal >= targetElPrice) {
          //잔액(기계돈)이 아이템 가격보다 같거나 클 경우
          this.balance.textContent =
            new Intl.NumberFormat().format(balanceVal - targetElPrice) + "원";
          //장바구니 콜라 생성

          this.stagedItemGenerator(event.currentTarget); //왜 커렌트?

          for (const itme of this.stagedList) {
          }

          this.stagedList.forEach((item) => {}); //forEach는 자기 콜백함수에 집어넣는데, break나 return 이외엔 그만 돌릴 방법이 없음.
          //for of로 조건을 만들어서 정지 할 수 있음.
        } else {
          // balanceVal < targetElPrice 경우
          alert("금액이 부족합니당.🥹");
        }
      });
    });
  }
}

export default VendingMachineEvents;
