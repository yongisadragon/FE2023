import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useAuthContext = () => {
  // useContext를 통해 전역 context에 접근합니다.
  const context = useContext(AuthContext);

  // AuthContext로부터 얘네가 들어올듯하네요 value={{ ...state(얘는user), dispatch }}
  return context;
};

export default useAuthContext;
