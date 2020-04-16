import React from "react";
import styled from "styled-components";
import { FacebookSquare, Instagram } from "@styled-icons/boxicons-logos";

const Container = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  margin-top: 150px;
  font-family: Karla, sans-serif;
`;

const Icons = styled.div``;

const Icon = styled.a`
  svg {
    width: 40px;
    &:hover {
      color: #f2b636;
    }
  }
`;

// #f15558

const Subtitle = styled.h5``;

const Footer = () => (
  <Container>
    <div>© 2020 MAUM</div>
    <Icons>
      <Icon>
        <Instagram />
      </Icon>
      <Icon>
        <FacebookSquare />
      </Icon>
    </Icons>
  </Container>
);

export default Footer;
