import styled from "styled-components";

export const HomeTodoListContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.25);
  border: 1px solid black;
  width: 80%;
  height: 100px;
  overflow: hidden;
  justify-content: space-between;
  display: flex;

  &::-webkit-scrollbar {
    display: none;
  }
`;