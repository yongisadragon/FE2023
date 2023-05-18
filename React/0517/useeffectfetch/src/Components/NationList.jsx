import React, { useEffect, useState } from "react";
import styled from "styled-components";
//스타일드 컴포넌트는 대문자로 상수..
const Item = styled.div`
  margin: 60px auto;
  ul {
    padding: 10px;
  }
  li {
    margin: 20px 0;
    padding: 10px;
    border: 1px solid black;
    box-sizing: border-box;
    border-radius: 5px;
    list-style: none;
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

//JSON 데이터를 가져와서 나라 목록을 렌더링하는 React 컴포넌트
export default function NationList() {
  const [nations, setNations] = useState([]);
  const [url, setUrl] = useState("http://localhost:3000/nations");
  // const url = "http://localhost:3000/nations";
  // async function NationList() {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   console.log(data);
  //   let nations = data.map((item) => {
  //     return <li key={item.id}>{item.title} </li>;
  //   });
  // }
  // NationList();
  // useState에 의해 nations가 변화가 일어나면 계속해서 리렌더링으로 끊임없이 데이터가 호출되어진다.. 이렇게 끝없이 리렌더링되는 상황에서 useEffect를 효과적으로 사용할 수 있다.

  // useEffect(async () => {
  // fetch("http://localhost:3000/nations")
  //   .then((response) => {
  //     //http 상태코드가 200번인가? !는 그반대
  //     if (!response.ok) {
  //       throw new Error("네트워크 응답에 문제가 있습니다.");
  //     }
  //     return response.json();
  //   })
  //   .then((json) => {
  //     console.log(json);
  //     setNations(json);
  //   })
  //   //new Error가 error에 흘러들어옴, 콘솔에러 두번째 인자는 구체적인 에러 내용을 보여주기 위함.
  //   .catch((error) => {
  //     console.error("데이터 가져오는데 문제가 발생했습니다: ", error);
  //   });

  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //fetch는 프라미스 반환하는 비동기 함수
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("네트워크 응답에 문제가 있습니다.");
        }
        // response.json()도 프라미스 반환
        const data = await response.json();
        setNations(data);
      } catch (error) {
        console.error("데이터 가져오는데 문제가 발생했습니다: ", error);
      }
    };
    fetchData();
  }, [url]);
  // 처음엔 빈배열로 한번만 실행하게 했지만, 버튼에 의해 새로운 데이터들을 넣어주려면 변화하는 값인 url이 변할때마다 새로 렌더링이 되도록 의존배열에 상태값url을 넣는다. 버튼에 url이 변경되도록 하는 쿼리스트링을 넣어놨으니까.
  console.log(nations);

  return (
    <Item>
      <h2>나라 목록</h2>
      <ul>
        {nations.map((nation, index) => {
          return (
            <li key={nation.id}>
              <h3>나라 이름 : {nation.title}</h3>
              <p>인구 수 : {nation.population}</p>
            </li>
          );
        })}
      </ul>
      <div>
        {/* 버튼 누를때마다 호출 url을 바꿔주는 작업 */}
        <button
          onClick={() => {
            // 서버에게 질문을 던짐. loc이 europe인값들이있냐? 버튼을 클릭할 때 setUrl을 호출하여 url 상태를 변경하는데, 이로써 useEffect의 의존성 배열에 있는 url이 변경되면 fetchData 함수가 실행되어 데이터를 다시 가져옵니다.
            setUrl("http://localhost:3000/nations?loc=europe");
          }}
        >
          유럽 목록
        </button>
        <button
          onClick={() => {
            setUrl("http://localhost:3000/nations");
          }}
        >
          전체 목록
        </button>
      </div>
    </Item>
  );
}
