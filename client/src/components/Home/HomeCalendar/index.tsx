import React from "react";
import "./style";
import { CalendarBox } from "./style";

let day = new Date();
const MONTH = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const WEEKDAY = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
let week = WEEKDAY[day.getDay()];
let TODAYMONTH = MONTH[day.getMonth()];
let date = day.getDate();

const HomeCalendar = () => {
  return (
    <CalendarBox>
      {week} {date} {TODAYMONTH}
    </CalendarBox>
  );
};

export default HomeCalendar;
