import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

// test : 글로벌 함수. 재스민 describe와 비슷한 동작이다. 첫번째 인자는 테스트 케이스의 설명이나 제목을 나타내는 문자열, 두번째 인자는 테스트를 실행하는 테스트 함수입니다.
// screen : 생성된 가상돔(App)에 접근하기 위한 전역 객체입니다.
// getByText : 'learn react'라는 텍스트를 포함하는 요소.(정규식 통해. i는 대소문자 구분x)
// expect ~ toBe.. : 기대식. 찾은 요소가 문서에 실제로 존재하는지 확인합니다.

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("버튼이 제대로 동작하고 있습니까?", () => {
  render(<App />);

  const button = screen.getByRole("button", { name: "change to blue" });
  // toHaveStyle 함수 : (나는 button이) 요소가 특정한 CSS 스타일을 가지고 있는지 체크합니다.
  expect(button).toHaveStyle({ backgroundColor: "red" });

  // 만약 click이 발생하게되면..(fireEvent).. 그 이하를 체크하라..
  fireEvent.click(button);
  expect(button).toHaveStyle({ backgroundColor: "blue" });
  // 매쳐(matcher) 함수 toBe
  expect(button.textContent).toBe("change to red");
});

// TDD 단계
// 🔴 적색 단계 : 성공하기 위해 테스트 실패하는 단계
// 🟢 녹색 단계 : 테스트에 성공하는 단계
// 🟣 리팩터 단계 : 테스트에 성공한 코드를 기반으로 코드의 품질을 높이는 단계 refactoring
