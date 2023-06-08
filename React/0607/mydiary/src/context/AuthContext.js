import { createContext, useEffect, useReducer } from "react";
import { appAuth } from "../firebase/config";

// context 객체를 생성합니다.
const AuthContext = createContext();

// react 에서 children 컴포넌트 태그의 사이에 위치한 내용을 가르킵니다.
const AuthContextProvider = ({ children }) => {
  const authReducer = (state, action) => {
    //type으로 분기처리
    switch (action.type) {
      case "login":
        return { ...state, user: action.payload };
      case "logout":
        return { ...state, user: null }; //로그아웃했으니까 null로 유저정보 비워주기
      case "isAuthReady":
        return { ...state, user: action.payload, isAuthReady: true }; //로그아웃했으니까 null로 유저정보 비워주기
      default:
        return state;
    }
  };

  //useState의 대체 함수로 상태관리를 위해 사용합니다. 보통 숫자형이나 문자열 같은 간단한 형태의 데이터를 관리할 때는 useState를 이용하지만, 객체와 같이 복잡한 형태의 데이터를 다양한 경우에 따라 관리해야할 때 usereducer를 사용합니다.즉, useReducer로 전역으로 관리하게됨.
  // const [관리할 값, dispatch 함수] = useReducer(리듀서 함수, 관리할 값의 초기화)
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    isAuthReady: false
  });

  useEffect(() => {
    const unsubscribe = appAuth.onAuthStateChanged(function (user) {
      // 파이어베이스가 유저정보를 가져올때까지 리액트 렌더링을 막아야한다. 리액트가 리렌더링되는 속도가 더 빠르기 때문에. isAuthReady가 true가 되면 다시 랜더링..
      dispatch({ type: "isAuthReady", payload: user });
    });
    // 클린업 함수를 통해서 구속 취소하도록.
    return () => {
      unsubscribe();
    };
  }, []);

  // 유저 정보가 업데이트 됐는지 확인.
  console.log("contxte:", state);

  return (
    // 회원정보 (state)와 dispatch 함수를 전달해서 필요할때마다 회원정보를 업데이트. 예를들어 logout컴포넌트에서 dispatch함수를 가져가서 회원정보(유저상태)를 업데이트(제거) 처리를 가능하게 함.
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
