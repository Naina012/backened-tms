import React from "react";
import { styled } from "styled-components";

import { Outlet } from "react-router-dom";
import Headers from "../components/screens/header/header";

const Layout = () => {
  return (
    <div>
      <LayoutStyled>
        <div className="header">
          <Headers />
        </div>
        <div className="Contant">
          <Outlet />
        </div>
      </LayoutStyled>
    </div>
  );
};

export default Layout;
const LayoutStyled = styled.div`
  height: 100%;
  width: 100%;
  .header{
    width: 100%;
    
  }
`;
