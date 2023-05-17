import { createContext } from "react";

export const UseInfo = createContext({ name: "yong", age: 26 });

//해당 폴더는 다수의 자손 컴포넌트에 Context적용을 위해 한 파일로 분리해서 사용할 수 있다는 것을 예시로 적어 놓은 파일..다른 컴포넌트에서 import UseInfo를 해서 사용할 수 있다. 현재의 폴더에서는 App.jsx와 HelloLicat.jsx만 서로 useContext관계를 맺고 있도록 설정했으며, 두개를 한번 체크해보시길.
