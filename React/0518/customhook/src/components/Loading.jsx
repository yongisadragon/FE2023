import React from "react";
import loadingImg from "../img/loading.gif";
import styles from "./Loading.module.css";

export default function Loading() {
  return (
    <img src={loadingImg} alt="로딩이미지" className={styles.imgLoading} />
  );
}
