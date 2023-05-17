import React from "react";
import { UserInfo } from "./AppConsumer";

export default function HelloLicat() {
  return (
    <UserInfo.Consumer>
      {/* value는 AppConsumer.jsx의 UserInfo.Provider의 프로퍼티로 입력된 값을 인자로 받는다.UserInfo.Consumer는 Provider와 연결되어 내부에서 콜백함수를 실행시킴. 이름이 일치될 필요는 없는듯. */}
      {/* Consumer는 자식으로 태그를 가질 수 없음.. 하나의 함수로 감싸야함. */}
      {(value) => {
        console.log(value);
        return (
          <div>
            {value.id}Hello{value.name}
          </div>
        );
      }}
    </UserInfo.Consumer>
  );
}
