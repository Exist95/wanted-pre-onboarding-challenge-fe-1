import React from "react";
import "./card.css";

const Card = ({ el }) => {
  return (
    <div className="card">
      <div>목록 : {el.title}</div>
      <div>상세 영역 : {el.content}</div>
    </div>
  );
};

export default Card;
