import axios from "axios";
import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  const [emailValid, setEmailValid] = useState(false);
  const [passValid, setPassValid] = useState(false);

  const navi = useNavigate();

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        await axios
          .post("http://localhost:8080/users/create", {
            email: email,
            password: password,
          })
          .then((res) => {
            if (res.status === 200) {
              navi("/login");
            }
          });
      } catch (err) {
        console.error(err);
        console.log("실패요");
        console.log(email);
      }
    },
    [email, password, navi]
  );

  const handleEmailChange = useCallback((e) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage("이메일 형식이 틀렸습니다");
      setEmailValid(false);
    } else {
      setEmailMessage("이메일 형식이 올바릅니다");
      setEmailValid(true);
    }
  }, []);

  const handlePasswordChange = useCallback((e) => {
    const passRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const passwordCurrnt = e.target.value;
    setPassword(passwordCurrnt);

    if (!passRegex.test(passwordCurrnt)) {
      setPasswordMessage("비밀번호 형식이 틀렸습니다.");
      setPassValid(false);
    } else {
      setPasswordMessage("비밀번호 형식이 올바릅니다.");
      setPassValid(true);
    }
  }, []);

  return (
    <div>
      <div>여기는 회원가입 페이지입니다.</div>
      <form onSubmit={onSubmit}>
        <div className="form_box">
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="이메일"
          ></input>
          {email.length > 0 && <div>{emailMessage}</div>}
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="패스워드"
          ></input>
          {password.length > 0 && <div>{passwordMessage}</div>}
          <button type="submit" disabled={!(emailValid && passValid)}>
            회원가입!
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
