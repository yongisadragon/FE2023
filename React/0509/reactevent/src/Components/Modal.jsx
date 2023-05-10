import React from "react";
import "./Modal.css";

export default function Modal({ children, modalClose }) {
  return (
    <div className="modal-dim">
      <article className="modal">
        {children}
        <button onClick={modalClose}>닫기</button>
      </article>
    </div>
  );
}
