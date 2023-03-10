import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeCalendar from "./HomeCalendar";
import HomeTodoList from "./HomeTodoList";
import { HomeWrap, HomeGrid } from "./style";

const Home = () => {
  const [login, setLogin] = useState(false);
  const [todo, setTodo] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [modi, setModi] = useState(false);
  const [update, setUpdate] = useState(false);
  const [changeTitle, setChangeTitle] = useState("");
  const [changeContent, setChangeContent] = useState("");

  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     setLogin(true);
  //   } else {
  //     setLogin(false);
  //     alert("토큰이 유효하지 않아요! 재로그인 해주세요!");
  //   }
  //   axios
  //     .get("http://localhost:8080/todos", {
  //       headers: { Authorization: localStorage.getItem("token") },
  //     })
  //     .then((res) => {
  //       setTodo(res.data.data);
  //     });
  // }, []);

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

  const modiCancel = () => {
    setModi(false);
    setUpdate(false);
  };

  const onCTitle = (e) => {
    setChangeTitle(e.target.value);
  };

  const onCContent = (e) => {
    setChangeContent(e.target.value);
  };

  return (
    <HomeWrap>
      <HomeGrid>
        <HomeCalendar />
        <HomeTodoList />
        {/* <div>
          <Link to="/">
            {login && <button onClick={handleLogout}>로그아웃</button>}
          </Link>
        </div> */}
        {/* <main>
          {login && (
            <div>
              <div>
                <span>To Do List</span>!
                {!modi && (
                  <button
                    style={{ marginLeft: "70px", cursor: "pointer" }}
                    disabled={!(title && content)}
                    onClick={PlusTodo}
                  >
                    {"추가"}
                  </button>
                )}
                {!modi && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "150px",
                    }}
                  >
                    <input
                      placeholder={"title"}
                      name="title"
                      value={title}
                      onChange={onTitle}
                    ></input>
                    <input
                      placeholder={"content"}
                      name="content"
                      value={content}
                      onChange={onContent}
                    ></input>
                  </div>
                )}
              </div>
              {update && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "150px",
                  }}
                >
                  <input
                    placeholder={"Change title"}
                    name="title"
                    value={changeTitle}
                    onChange={onCTitle}
                  ></input>
                  <input
                    placeholder={"Change content"}
                    name="content"
                    value={changeContent}
                    onChange={onCContent}
                  ></input>
                </div>
              )}
              {todo.map((el, index) => (
                
                  key={index}
                  el={el}
                  setModi={setModi}
                  modi={modi}
                  modiCancel={modiCancel}
                  setUpdate={setUpdate}
                  changeTitle={changeTitle}
                  changeContent={changeContent}
                />
              ))}
            </div>
          )}
        </main> */}
      </HomeGrid>
    </HomeWrap>
  );
};

export default Home;
