import React, { useEffect, useState } from "react";
import ImageList from "./components/ImageList";
import useScrollBottom from "./hooks/useScrollBottom";
import Loading from "./components/Loading";

// 커스텀 훅은 리액트에서 재사용 가능한 로직을 추상화하고, 컴포넌트 간에 공유하여 사용할 수 있는 방법입니다.~ 대표적으로 API 호출 관리 훅을 만들어 API 요청을 처리하고 데이터를 가져오는 로직을 캡슐화하여 여러 컴포넌트에서 사용할 수 있습니다.

function App() {
  const [imageList, setImageList] = useState([]);
  // 페이지 관리를 위한 스테이트 설정. 기본값이 1인이유는 1페이지가 기본값이기 떄문 (스크롤에 따른 페이지 호출)
  const [fetchPage, setFetchPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  console.log("로딩중이야?", isLoading);

  const isBottomChecker = useScrollBottom();
  // 커스텀 훅! 이제 어떤 컴포넌트에서도 스크롤이 바닥을 찍었는지를 불리언 값으로 알게되었다!!
  // console.log(useScrollBottom());

  useEffect(() => {
    //useEffect는 마운트 됐을때 딱 한번만 실행됨.
    fetchImages();
    //setImageList에 의한 리렌더링 때문에 무한 페치됨. 의존성 배열 넣어주기.
  }, [fetchPage]);

  useEffect(() => {
    if (isBottomChecker) {
      //prevPage에[는] fetchPage의 이전 값이 들어감.
      setFetchPage((prevPage) => {
        return prevPage + 1;
      });
    }
  }, [isBottomChecker]);

  async function fetchImages() {
    setIsLoading(true);
    const url = `https://picsum.photos/v2/list?page=${fetchPage}&limit=5`;
    try {
      const response = await fetch(url);
      // 예외처리
      if (!response.ok) {
        throw new Error("너 문제있음");
      }
      //얘도 프라미스 반환, 비동기 필요
      const data = await response.json();
      setImageList((prevImages) => {
        return [...prevImages, ...data];
      }); //무한스크롤 대비, 이미지 페이지가 갱신되면 기존이미지가 없어지는 문제가 생김.. 기존이미지 배열에 배열을 또 리턴하기 위해 기존 이미지 배열과 새로들어오는 data배열이 새롭게
      // console.log(data);
      setIsLoading(false); //통신이 끝났을때 알려주기
      setShowLoading(true); // 이미지를 불러올 때마다 로딩 이미지를 보여주도록 설정
      setTimeout(() => {
        setShowLoading(false); // 2초 후에 로딩 이미지를 숨김
      }, 5000);
    } catch (error) {
      console.error("에러라고!", error);
      setIsLoading(false);
    }
  }

  return (
    <div>
      hello
      <ImageList imageList={imageList} />
      {isLoading && <Loading />}
    </div>
  );
}
export default App;
