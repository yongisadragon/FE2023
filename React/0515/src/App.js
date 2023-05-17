import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import RouteStudy from "./RouterSolve/RouteStudy";
import RouteSolve from "./RouterSolve/RouteSolve";
import Counter from "./HookUseEffect/TryUseEffect";
import Time from "./HookUseEffect/Quiz2";
import Counter2 from "./HookUseRef/TryUseRef";
import TryUseRefDom from "./HookUseRef/TryUseRefDom";
import TryUseMemo from "./HookUseMemo/TryUseMemo";

function App() {
  return (
    <>
      {/* <RouteStudy /> */}
      <RouteSolve />
      {/* <Counter /> */}
      {/* <Time /> */}
      {/* <Counter2 /> */}
      {/* <TryUseRefDom /> */}
      {/* <TryUseMemo /> */}
    </>
  );
}

export default App;
