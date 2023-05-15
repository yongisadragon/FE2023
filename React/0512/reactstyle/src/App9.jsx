import styled from "styled-components";

//공통 속성 스타일드 컴포넌트, width만 조건부로 setting 설정.
const CardDiv = styled.div`
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
  margin-bottom: 20px;
  width: ${(props) => (props.className === "setting" ? "200px" : "400px")};
`;

//카드 마다 공통되지 않는 컴포넌트 2개, SettingCard, ShareCard
const SettingCard = () => {
  return (
    <>
      <button>초기화</button>
      <button>저장하기</button>
    </>
  );
};

const ShareCard = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ut
        eveniet, laudantium, deleniti autem sequi molestias magni quia, aliquam
        et praesentium nostrum dolores culpa cupiditate unde doloremque labore
        beatae accusamus.
      </p>
      <div>
        <button>이미지 저장</button>
        <button>트위터</button>
        <button>페이스북</button>
      </div>
    </>
  );
};

const Card = (props) => {
  return (
    <CardDiv className={props.className}>
      <h3>{props.value}</h3>
      <hr />
      {/* App함수 안에서 Card렌더 태그에 추가된 하위 childre가져오기, 각각의 경우 SettingCard, ShareCard */}
      <div>{props.children}</div>
    </CardDiv>
  );
};

//공통 부분.렌더
// const Card = (props) => {
//   return (
//     <CardDiv className={props.className}>
//       <h3>{props.value}</h3>
//       <hr />
//     </CardDiv>
//   );
// };
function App() {
  return (
    <>
      <Card className="setting" value="챌린지 설정"></Card>
      <Card className="share" value="서비스 공유하기"></Card>

      <Card className="setting" value="챌린지 설정">
        <SettingCard />
      </Card>
      <Card className="share" value="서비스 공유하기">
        <ShareCard />
      </Card>
    </>
  );
}

export default App;
