import axios from "axios";
import React from "react";
import "./card.css";

const Card = ({ el }) => {
  //Delete 추가하기
  //Update 추가

  const onDelete = () => {
    let id = el.id;
    try {
      axios
        .delete(`http://localhost:8080/todos/${id}`, {
          headers: { Authorization: localStorage.getItem("token") },
        })
        .then((res) => {
          if (res.status === 200) {
            window.location.reload();
            alert("삭제되었습니다.");
          }
        });
    } catch (error) {
      alert("error");
    }
  };

  return (
    <div className="card">
      <div>목록 : {el.title}</div>
      <div>상세 영역 : {el.content}</div>
      <button
        onClick={onDelete}
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        삭제
      </button>
    </div>
  );
};

export default Card;
