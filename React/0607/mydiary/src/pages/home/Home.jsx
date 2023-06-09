import React from "react";
import styles from "./Home.module.css";
import DiaryForm from "./DiraryForm";
import { useCollection } from "../../hooks/useCollection";
import DiaryList from "./DiaryList";
import useAuthContext from "../../hooks/useAuthContext";

export default function Home() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, 0);
  const day = String(date.getDate()).padStart(2, 0);
  const result = `${year}.${month}.${day}`;
  const { user } = useAuthContext();
  // secretDiary는 컬렉션 이름, useCollection의 두번째 인자로 쿼리를 전달.
  const { documents, error } = useCollection("secretDiary", [
    "uid",
    "==",
    user.uid
  ]);

  return (
    <div className={styles.container}>
      <main className={styles["diary-main"]}>
        <h2 className={styles.heart}>{result}의 비밀일기</h2>
        <DiaryForm uid={user.uid} />
      </main>
      <section>
        <h2 className="a11y-hidden">일기 목록</h2>
        <ul>
          {error && <strong>{error}</strong>}
          {documents && <DiaryList diaries={documents} />}
        </ul>
      </section>
    </div>
  );
}
