import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./components/Card";

// Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다.
// Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.
// 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인할 수 있도록 해주세요.

// 새로고침을 했을 때 현재 상태가 유지되어야 합니다.
// 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 해주세요.
// 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현해주세요

// 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되어야 합니다

const Main = () => {
  const [login, setLogin] = useState(false);
  const [todo, setTodo] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLogin(true);
    } else {
      setLogin(false);
      alert("토큰이 유효하지 않아요! 재로그인 해주세요!");
    }
    axios
      .get("http://localhost:8080/todos", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        setTodo(res.data.data);
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const PlusTodo = () => {
    axios
      .post(
        "http://localhost:8080/todos",
        {
          title: title,
          content: content,
        },
        {
          headers: { Authorization: localStorage.getItem("token") },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          window.location.reload();
        }
      });
  };

  const onTitle = (e) => {
    setTitle(e.target.value);
  };

  const onContent = (e) => {
    setContent(e.target.value);
  };

  return (
    <div>
      <section>
        <div>프리온보딩 사전 과제입니다.</div>
        <div>{`로그인 상태입니다 : ${login}`}</div>
        {!login && <div>로그인이 되어야 To Do List를 확인할 수 있어요!!</div>}
        <Link to="/login">{!login && <button>로그인</button>}</Link>
        <Link to="/signup">{!login && <button>회원가입</button>}</Link>
        <Link to="/">
          {login && <button onClick={handleLogout}>로그아웃</button>}
        </Link>
      </section>
      <main>
        {login && (
          <div>
            <div>
              <span>todolist</span>
              <button
                style={{ marginLeft: "100px", cursor: "pointer" }}
                disabled={!(title && content)}
                onClick={PlusTodo}
              >
                {"+"}
              </button>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "150px",
                }}
              >
                <input
                  placeholder="title"
                  name="title"
                  value={title}
                  onChange={onTitle}
                ></input>
                <input
                  placeholder="content"
                  name="content"
                  value={content}
                  onChange={onContent}
                ></input>
              </div>
            </div>
            {todo.map((el, index) => (
              <Card key={index} el={el} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Main;
