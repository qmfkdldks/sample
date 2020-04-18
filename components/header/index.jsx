import React from "react";
import styled from "styled-components";
import Link from "next/link";

export const Container = styled.header`
  padding-right: 15px;
  padding-left: 15px;
`;

const Header = () => (
  <Container>
    <Link href="/">
      <a>
        <img
          src="https://demo.hasthemes.com/arden-preview/arden/assets/img/logo.png"
          alt="Logo"
        />
      </a>
    </Link>
  </Container>
);

export default Header;
