import styled from "styled-components";
import Header from "../components/header";
import { up, down } from "styled-breakpoints";

const Title = styled.h2`
  font-size: calc(1.5625rem + 3.75vw);
  color: #f2b636;
  font-weight: 700;
  font-family: Karla, sans-serif;
  flex: 0 0 58.333333%;
  max-width: 58.333333%;
  padding-right: 15px;
  padding-left: 15px;
`;

const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

const Background = styled.img`
  z-index: -1;

  ${up("tablet")} {
    position: absolute;
    top: 0px;
    right: 0px;
  }

  ${down("tablet")} {
    position: relative;
    width: 100%;
  }
`;

const ProductPage = () => (
  <div>
    <Header />
    <Background src="https://cdn.dribbble.com/users/146798/screenshots/5887398/sushi_4x.jpg?compress=1&resize=800x600" />
    <Title>a simple yet beautiful portfolio ProductPagepage</Title>
  </div>
);

export default ProductPage;
