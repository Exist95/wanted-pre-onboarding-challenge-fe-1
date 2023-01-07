import React from "react";
import "./card.css";

const Card = ({ el }) => {
  //Delete 추가하기
  //Update 추가
  return (
    <div className="card">
      <div>목록 : {el.title}</div>
      <div>상세 영역 : {el.content}</div>
      <button style={{ display: "flex", justifyContent: "flex-end" }}>
        삭제
      </button>
    </div>
  );
};

export default Card;
