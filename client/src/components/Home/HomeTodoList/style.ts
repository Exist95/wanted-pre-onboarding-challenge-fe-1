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
  background-color: ${palette.yellow[200]};

  &::-webkit-scrollbar {
    display: none;
  }
`;
