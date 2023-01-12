import React from "react";
import useLogout from "../../../hooks/auth/useLogout";
import { LogoutButtonContainer } from "./style";

const LogoutButton = () => {
  const { onLogout } = useLogout();

  return (
    <LogoutButtonContainer onClick={onLogout}>
      LogoutButton
    </LogoutButtonContainer>
  );
};

export default LogoutButton;
