import React from "react";
import { Link } from "react-router-dom";
import { MONTH, WEEKDAY } from "./dayList";
import "./style";
import { AuthBox, CalendarBox, DateBox, WeekBox } from "./style";

let day = new Date();
let week = WEEKDAY[day.getDay()];
let todaymonth = MONTH[day.getMonth()];
let date = day.getDate();

const HomeCalendar = () => {
  return (
    <CalendarBox>
      <DateBox>
        {date}{" "}
        <WeekBox>
          <div>{week} </div>
          <div>{todaymonth}</div>
        </WeekBox>
      </DateBox>
      <AuthBox>
        <Link to="/login">{<button>로그인</button>}</Link>
        <Link to="/signup">{<button>회원가입</button>}</Link>
      </AuthBox>
    </CalendarBox>
  );
};

export default HomeCalendar;
