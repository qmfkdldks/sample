import React from "react";
import styled from "styled-components";

export const Container = styled.header`
  padding-right: 15px;
  padding-left: 15px;
`;

const Header: React.FunctionComponent = () => (
  <Container>
    <img
      src="https://demo.hasthemes.com/arden-preview/arden/assets/img/logo.png"
      alt="Logo"
    />
  </Container>
);

export default Header;
