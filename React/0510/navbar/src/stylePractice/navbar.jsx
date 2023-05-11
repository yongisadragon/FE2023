import React, { useState } from "react";
import Detail from "./detail";
import Question from "./question";
import Review from "./review";

const ContentsContainer = ({ listName }) => {
  if (listName === "detail") {
    return <Detail />;
  } else if (listName === "qa") {
    return <Question />;
  } else if (listName === "review") {
    return <Review />;
  }
};

function NavBar() {
  const [listName, setListName] = useState("detail");
  const setId = (e) => {
    setListName(e.target.id);
  };

  return (
    <>
      <nav>
        <ul>
          <li
            id="detail"
            style={
              listName === "detail" ? { color: "red" } : { color: "black" }
            }
            onClick={setId}
          >
            상세정보
          </li>
          <li
            id="qa"
            onClick={setId}
            style={listName === "qa" ? { color: "red" } : { color: "black" }}
          >
            Q&A
          </li>
          <li
            id="review"
            onClick={setId}
            style={
              listName === "review" ? { color: "red" } : { color: "black" }
            }
          >
            Review
          </li>
        </ul>
      </nav>
      <ContentsContainer listName={listName} />
    </>
  );
}

export default NavBar;
