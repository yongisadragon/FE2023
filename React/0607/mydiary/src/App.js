import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Header from "./components/Header";
import useAuthContext from "./hooks/useAuthContext";

// 컴포넌트는 라우팅 필요없이 모든 페이지에 공통적으로 랜더링되어야 하기 때문에 <Routes> 밖에 위치합니다.
function App() {
  const { isAuthReady, user } = useAuthContext();
  return (
    <>
      {isAuthReady ? (
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                user ? <Home /> : <Navigate to="/login" replace={true} />
              }
            ></Route>
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" replace={true} />}
            ></Route>
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" replace={true} />}
            ></Route>
          </Routes>
        </BrowserRouter>
      ) : (
        "loadging..."
      )}
    </>
  );
}
export default App;
