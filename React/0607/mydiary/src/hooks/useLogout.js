import React, { useState } from "react";
import useAuthContext from "./useAuthContext";
import { signOut } from "firebase/auth";
import { appAuth } from "../firebase/config";

export const useLogout = () => {
  const [error, setError] = useState(null); //에러상태인지,
  const [isPending, setIsPending] = useState(false); //통신상태인지,

  const { dispatch } = useAuthContext();

  const logout = () => {
    setError(null); // 아직 에러가 없으니 null 입니다.
    setIsPending(true); // 통신중이므로 true입니다.

    signOut(appAuth)
      .then(() => {
        // Sign-out successful.
        dispatch({ type: "logout" });
        setError(null);
        setIsPending(false);
      })
      .catch((error) => {
        // An error happened.
        setError(error.message);
        setIsPending(false);
        console.log(error.message);
      });
  };

  return { error, isPending, logout };
};
