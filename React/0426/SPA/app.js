const container = document.querySelector("#root");

// 환경변수는 대문자가 관례
const NEWSLIST_URL = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT_URL = "https://api.hnpwa.com/v0/item/$id.json"; //&id는 클릭했을 때 보여져야할 정보들 목록..일종의 아이템마다 번호? 이 JSON주소는 프로젝트 하면서 거의 바뀌지 않을

// 현재 사용자가 보고있는 페이지의 정보와 화면에 보여질 아이템의 갯수를 저장하는 객체
const store = {
  currentPage: 1,
  datasPerPage: 10, //한 화면당 나오는 갯수
};

// api 데이터 받아오는 함수 // url 을 입력받고 ajax 요청하여 데이터를 출력하는 함수
async function getData(url) {
  // 애플리케이션이 실행되면서 뉴스 목록 데이터를 받아옵니다.
  try {
    const response = await fetch(url); //console로 response 받아오면 퍼필이 뜨지만, 펜딩상태로 나온다. 비동기로 처리되어 그러는데 그래서 async await..사용
    if (!response.ok) {
      //ok가 참이아니라면
      throw new Error("네트워크에 문제가 있습니다.");
    }
    return response.json();
  } catch (error) {
    //throw에서 받아옴.
    console.log(error);
  }
}

async function newsFeed() {
  // 우선 api로부터 데이터를 받아옵니다.
  const newsFeed = await getData(NEWSLIST_URL); //위의 getData함수가 async로 비동기화 됐으니 여기서 붙여야한다.. 없었따면 비동기함수라서 콘솔로그가 먼저 실행돼 에러나옴
  const totalPages = Math.ceil(newsFeed.length / store.datasPerPage); //datasPerPage는 우리가 임의로 설정한 값. 이를테면 총 33개면 4페이지 (datasPerPage는 10으로 가정)이므로 반'올림'무조건 해줘야함
  // console.log(newsFeed);

  // DOM api 를 최소한으로 하기위해 배열을 생성하여 원소로 HTML 문자열을 할당합니다.
  const newsList = [];
  newsList.push("<ul>");

  for (
    let i = (store.currentPage - 1) * store.datasPerPage;
    i < store.currentPage * store.datasPerPage;
    i++
  ) {
    // 앵커를 클릭하면 현재 URL에 #이 붙도록 합니다. 이렇게 해야 라우터가 location.hash를 이용해 현재 페이지와 컨텐츠를 파악할 수 있습니다. 마치 옛 사람들이 별자리를 보고 현재 위치를 파악했던 것과 비슷하다고 생각하면 됩니다. (어떻게 파악했는지는 잘 모르겠지만..ㅋ)
    // 마치 앵커를 클릭했을 때 쿼리가 바뀌는 토스와 비슷합니다.
    // https://toss.im/career/jobs?company=%EC%A0%84%EC%B2%B4

    //하나씩 숫자 넣어보면 이해가 될거임. i값이 10이면 11번째 데이터임. 이를테면 datasPerPage가 10이라 가정했으니, 1페이지에는 0-9번 10개, 2페이지에는 10-19번 10개, .. 이런식
    //li를 10개 만들어서 List에 푸쉬할거임
    //2번을 누르면 인덱스 10(11번째)부터 시작
    newsList.push(` 
          <li>
              <a href="#/detail/${newsFeed[i].id}">${newsFeed[i].title}(${newsFeed[i].comments_count})</a>
          </li>
      `); //title과 comment count 알아야함 //라우터가 href 안의 값을 보고 그 페이지로 이동시켜준다?
  }

  newsList.push("</ul>"); // ul 종료 태그를 담아둡니다.

  // newsList 배열에 페이지네이션을 추가합니다. 해쉬 뒤에 링크가 페이지 이동인지, 컨텐츠로 이동인지 구분이 필요하기 때문에 앞에 'page/' 라는 이름을 붙여줍니다.
  let pageList = "";
  for (let i = 0; i < totalPages; i++) {
    //데이터 갯수와 datasPerPage계산해서 totalPages설정..
    pageList += `<li><a href='#/page/${i + 1}'>${i + 1}</a></li>`;
  }

  newsList.push(
    `<nav>
        <ul>
        ${pageList}      
       </ul>
      </nav>`
  );

  // console.log(newsList.join(""));
  container.innerHTML = newsList.join(""); // join을 통해 원소를 한줄의 문자열로 합칩니다. //배열을 문자열로 합쳐주는 join 아무런값 없으면 쉼표로 나누어지기 때문에 ''를 넣어야함
}

// 뉴스 디테일 페이지 구성 함수
async function newsDetail() {
  const id = location.hash.substring(9); // location.hash : location 의 해쉬와(#) 이어지는 나머지 문자열 값을 반환합니다. //substring: #부터 시작해서 몇번째까지 자르고 뒤에것을 반환. 9를 배치하면 #/detail/이 잘려버림.
  const newsContent = await getData(CONTENT_URL.replace("$id", id)); //#id를 대체해야함

  container.innerHTML = `
      <h1>${newsContent.title}</h1>
      <div><a href='#/page/${store.currentPage}'>목록으로 돌아가기</a></div>
  `;
}

// 라우터 : 화면을 중계하는 함수. 현재 url 주소를 통해 화면에 랜더링 해야할 화면을 결정하는 역할을 합니다.
function router() {
  const routePath = location.hash; // hash fragment

  if (routePath === "") {
    // 만약 #값이 없다면 첫화면으로. location.hash는 # 하나만 있으면 빈문자열로 인식합니다.
    //hash 프래그먼트가 있을 때, 없을 때,
    newsFeed();
    // url에 /page/ 문자열이 있는지 파악하여 이전, 다음 페이지 앵커를 클릭했는지 판단합니다.
  } else if (routePath.includes("#/page/")) {
    // 2번 형식. else if (routePath.indexOf("#/page/") >= 0) { //해당 문자열이 라우터 패스안에 몇번째 인덱스부터 존재하는가? 페이지네이션이 작동됐는지 여부
    store.currentPage = parseInt(routePath.substring(7));
    newsFeed();
  } else {
    newsDetail();
  }
}

window.addEventListener("hashchange", router); //url 다음의 해쉬값들이. 즉 location의 해쉬가 바뀔때마다 발생하는 이벤트를 생성

router();
