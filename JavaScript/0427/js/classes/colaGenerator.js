class ColaGenerator {
  constructor() {
    this.itemList = document.querySelector(".section1 .cola-list");
  }

  async setup() {
    //다른 함수들 실행하는 시동함수
    const response = await this.loadData(); //통신 실행
    console.log(response);
    this.colaFactory(response); //받아온 데이터로 기능 실행
  }

  async loadData() {
    try {
      //시도해 볼 코드
      const response = await fetch("./items.json"); //fetch 다 될 때까지 기다려!
      //async await는 fetch에서 then catch와 같이 체이닝 일어나는 것도 코드가 길어지니까 fetch 다될때까지 기다리자(then~catch다 될 때까지)..(promise->resolve->then->콜백->최종적으로 response객체 반환) 즉 response(써버의 상태를 알려주는 정보들 가지고있음)는 then이 반환하는 콜백함수 안에 들어가는 인자이다..설탕 문법이다..
      if (response.ok) {
        // 서버의 응답 코드가 200~299일 경우
        return response.json();
      } else {
        throw new Error(response.status); //가장 가까운 catch로 인자 전달
      }
    } catch (error) {
      console.log(error);
    }
  }

  colaFactory(data) {
    const docFrag = document.createDocumentFragment(); //메모리상의 가상돔에 어펜드하자
    //loadData를 통해서 온 json객체
    data.forEach((el) => {
      //li에 딸린 애들을 생성해야함
      const item = document.createElement("li");
      const itemTemplate = `<button class="btn-cola" type="button" data-item="${el.name}" data-count="${el.count}" data-price="${el.cost}" data-img="${el.img}">
      <img class="cola-img" src="./img/${el.img}" alt="">
      <span class="cola-name">${el.name}</span>
      <strong class="cola-price">${el.cost}원</strong>
  </button>
  `;

      //data사용해서 html요소들을 하나의 객체처럼 사용가능 버튼에다가 여러 데이터를 심어놓는다.. 장바구니 넣는 것 등과 같은 기능들과..함께..결국 버튼에서 이벤트가 발생할 것이기 때문에.. 쿼리셀렉을 너무 남용하면 성능이 떨어지기 때문에
      item.innerHTML = itemTemplate; //이건 포이치 안에 꼭 있어야함. li안에 생성되어야 하기 때문
      docFrag.append(item); //가상돔을 이용해서 계속 붙이는 방식을 피하자.
    });
    this.itemList.append(docFrag);
  }
}

export default ColaGenerator; //모듈 내보내는 키워드, 내보낼 것이 1개뿐일 때는 default.
