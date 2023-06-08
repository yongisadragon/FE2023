import React from "react";
import styles from "./Home.module.css";
import DiaryForm from "./DiraryForm";
import { useCollection } from "../../hooks/useCollection";
import useAuthContext from "../../hooks/useAuthContext";
import DiaryList from "./DiaryList";

export default function Home() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, 0);
  const day = String(date.getDate()).padStart(2, 0);
  const result = `${year}.${month}.${day}`;
  const { user } = useAuthContext();
  const { documents, error } = useCollection("secretDiary");

  return (
    <div className={styles.container}>
      <main className={styles["diary-main"]}>
        <h2 className={styles.heart}>{result}의 비밀일기</h2>
        <DiaryForm uid={user.uid} />
      </main>
      <section>
        <h2 className="a11y-hidden">일기 목록</h2>
        <ul>
          {error && <strong>error</strong>}
          {documents && <DiaryList diaries={documents} />}
        </ul>
      </section>
    </div>
  );
}
