import React from "react";
import { createContext } from "react";
import HelloLicat from "./HelloLicat";

const UserInfo = createContext();

function AppConsumer() {
  return (
    <UserInfo.Provider value={{ name: "gary", id: "garyIsFree" }}>
      <HelloLicat />
    </UserInfo.Provider>
  );
}

export { AppConsumer, UserInfo };
