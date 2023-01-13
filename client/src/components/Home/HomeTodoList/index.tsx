import axios from "axios";
import React from "react";
import { HomeTodoListContainer } from "./style";

const HomeTodoList = (
  {
    // el,
    // setModi,
    // modi,
    // setUpdate,
    // modiCancel,
    // changeTitle,
    // changeContent,
  }
) => {
  // const onDelete = () => {
  //   const id = el.id;
  //   try {
  //     axios
  //       .delete(`http://localhost:8080/todos/${id}`, {
  //         headers: { Authorization: localStorage.getItem("token") },
  //       })
  //       .then((res) => {
  //         if (res.status === 200) {
  //           window.location.reload();
  //           alert("삭제되었습니다.");
  //         }
  //       });
  //   } catch (error) {
  //     alert("error");
  //   }
  // };

  // const onUpdate = () => {
  //   setModi(true);
  //   setUpdate(true);
  // };

  // const postData = () => {
  //   const id = el.id;
  //   axios
  //     .put(
  //       `http://localhost:8080/todos/${id}`,
  //       {
  //         title: changeTitle,
  //         content: changeContent,
  //       },
  //       { headers: { Authorization: localStorage.getItem("token") } }
  //     )
  //     .then((res) => {
  //       if (res.status === 200) {
  //         window.location.reload();
  //       }
  //     });
  // };

  return (
    <HomeTodoListContainer>
      {/* <div>
        <div>
          <div>목록 : {el.title}</div>
          <div>상세 영역 : {el.content}</div>
        </div>
        <div>
          <button onClick={onDelete}>삭제</button>
          {!modi && <button onClick={onUpdate}>수정</button>}
          {modi && (
            <>
              {modi && (
                <button
                  style={{ cursor: "pointer" }}
                  disabled={!(changeTitle && changeContent)}
                  onClick={postData}
                >
                  수정완료
                </button>
              )}
              {modi && (
                <button style={{ cursor: "pointer" }} onClick={modiCancel}>
                  수정취소
                </button>
              )}
            </>
          )}
        </div>
      </div> */}
    </HomeTodoListContainer>
  );
};

export default HomeTodoList;
