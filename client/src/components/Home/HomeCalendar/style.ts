import styled from "styled-components";
import { palette } from "../../../styles/palette";

export const CalendarBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 100%;
  margin-top: -20px;
`;

export const WeekBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 10rem;
  gap: 15px;

  > div {
    font-size: 20px;
    padding-left: 20px;
    font-weight: 700;
  }
`;

export const DateBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 80px;
  height: 10rem;
  font-weight: 900;
`;

export const AuthBox = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const MonthBox = styled.div``;
