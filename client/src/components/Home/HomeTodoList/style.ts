import styled from "styled-components";
import { palette } from "../../../styles/palette";

export const HomeTodoListContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.25);
  border: 1px solid black;
  width: 100%;
  height: 90vh;
  overflow: hidden;
  justify-content: space-between;
  display: flex;
  background-color: ${palette.yellow["custom"]};

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TodoListWrap = styled.div`
  padding: 10px;
  width: 100%;
`;

export const TodoListHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-decoration: underline;

  > div {
    font-size: 30px;
    font-weight: 800;
  }
`;

export const TodoListImg = styled.img`
  width: 40px;
  height: 40px;
`;
