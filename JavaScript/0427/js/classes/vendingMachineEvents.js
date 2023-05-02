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
    stagedItem.dataset.item = target.dataset.item;
    stagedItem.dataset.price = target.dataset.price;
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
    this.btnsCola = document.querySelectorAll(".section1 .btn-cola"); //콜라 버튼들 선택

    this.btnsCola.forEach((item) => {
      //item은 콜라 버튼 하나하나
      item.addEventListener("click", (event) => {
        // 잔액
        const balanceVal = parseInt(
          this.balance.textContent.replaceAll(",", "")
        );
        const targetEl = event.currentTarget; //target은 사용자가 마우스로 선택하는 요소 그 자체, currentTarget은 이벤트 리스너가 달린 요소, 여기에선 item -> this.btnsCola의 영역이다.
        // console.log(targetEl);
        const targetElPrice = parseInt(targetEl.dataset.price); //리스너 달려있는 놈, dataset은 해당요소 data에 접근하는 메서드
        const stagedListItem = this.stagedList.querySelectorAll("li");
        let isStaged = false; //이미 장바구니에 있는가? t/f 알기위해 더미처럼 넣어준 불린 값

        if (balanceVal >= targetElPrice) {
          //잔액(기계돈)이 아이템 가격보다 같거나 클 경우
          this.balance.textContent =
            new Intl.NumberFormat().format(balanceVal - targetElPrice) + "원";

          for (const item of stagedListItem) {
            //중복됐을 때 카운트 쌓이는 것을 해결해주는 for문
            //같은 제품을 넣었을 때, li가 개별로 추가되지 않고 카운트되는 숫자가 +1되도록
            //클릭한 콜라의 이름과 장바구니에 있던 콜라의 이름이 같은지 비교
            if (targetEl.dataset.item === item.dataset.item) {
              //이미 장바구니에 콜라가 있따면 카운트만 + 1
              item.querySelector("strong").firstChild.textContent =
                parseInt(item.querySelector("strong").firstChild.textContent) +
                1;

              isStaged = true;
              break;
            }
          }

          if (!isStaged) {
            //처음 선택했을 경우만 장바구니에 콜라를 생성합니다.
            //장바구니 콜라 생성
            this.stagedItemGenerator(event.currentTarget); //장바구니 콜라 생성 코드
          }

          //콜라 개수 차감(재고 업데이트)
          targetEl.dataset.count--;

          if (!parseInt(targetEl.dataset.count)) {
            //품절 처리를 위한 조건문
            //parseInt(targetEl.dataset.count) === 0 과 같음
            targetEl.insertAdjacentHTML(
              //교안 참고
              "beforeEnd",
              `
            <strong class="soldout">
            <span>품절</span>
            </strong>
            `
            );
            targetEl.disabled = "disabled";
          }
          //this.stagedList.forEach((item) => {}); //forEach는 자기 콜백함수에 집어넣는데, break나 return 이외엔 그만 돌릴 방법이 없음.
          //for of로 조건을 만들어서 정지 할 수 있음.
        } else {
          // balanceVal < targetElPrice 경우
          alert("금액이 부족합니당.🥹");
        }
      });
    });

    /**
     * 4. 획득 버튼 기능
     * 1) 장바구니에 있는 음료수 목록이 획득한 음료 목록으로 이동합니다.
     * 2) 획득한 음료의 모든 금액을 합하여 총 금액을 업데이트 합니다.
     */
    this.btnGet.addEventListener("click", () => {
      const itemStagedList = this.stagedList.querySelectorAll("li"); //왼쪽 list의 li
      const itemGetList = this.getList.querySelectorAll("li"); //오른쪽 list의 li
      let totalPrice = 0; //총금액 더해주기 위해 초깃값 숫자형(0)으로 설정

      // 175-193과정: 왼쪽 list와 오른쪽 list를 순회하는데, 초기 획득 값(isGet)을 false로 설정해둔 뒤 진행해야 한다. let isGet = false;은 각 색상별 음료수가 왼쪽에서 오른쪽으로 넘어갔을 때, if(!isGet)을 거치도록 해주는 초깃값 세팅이다. 또, isGet =false가 for문 바깥에 있으면, 각 음료가 for문을 돌때에 true상태이기 때문에 if(!isGet)이하 코드블럭이 실행되지 않아 append되지 않는다.
      for (const itemStaged of itemStagedList) {
        let isGet = false; //이미 획득했는가?, 각 아이템마다 비교해줘야함.
        for (const itemGet of itemGetList) {
          //장바구니의 콜라가 이미 획득한 목록에 있다면
          if (itemStaged.dataset.item === itemGet.dataset.item) {
            itemGet.querySelector("strong").firstChild.textContent =
              parseInt(itemGet.querySelector("strong").firstChild.textContent) +
              parseInt(
                itemStaged.querySelector("strong").firstChild.textContent
              );

            isGet = true;
            break;
          }
        }
        if (!isGet) {
          //최초로 list에 li 추가 해줄때에만 적용이 된다.
          this.getList.append(itemStaged);
        }
      }

      //장바구니 목록 초기화
      this.stagedList.innerHTML = null;

      //획득한 음료 리스트를 순회하면서 총금액 계산
      this.getList.querySelectorAll("li").forEach((itemGet) => {
        //최신화된 노드리스트를 순회해야함.
        // this.txtTotal.textContent =
        // parseInt(this.txtTotal.textContent) +
        // parseInt(itemGet.dataset.price) *
        //   parseInt(itemGet.querySelector("strong").textContent);

        totalPrice +=
          parseInt(itemGet.dataset.price) *
          parseInt(itemGet.querySelector("strong").firstChild.textContent); //strong이 a11된 span까지 포함하고 있어서. 사실 firstChild없어도 parseInt('1개')는 1로 출력된다.
      });
      // console.log(totalPrice);
      this.txtTotal.textContent = `총금액 : ${new Intl.NumberFormat().format(
        totalPrice
      )} 원`;
    });
  }
}

export default VendingMachineEvents;
