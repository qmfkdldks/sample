import { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";

const Home: NextPage = () => (
  <>
    <Title>a simple yet beautiful portfolio homepage</Title>
    <Tiles></Tiles>
  </>
);

export default Home;

export const Title = styled.h2`
  font-size: calc(1.5625rem + 3.75vw);
  color: #f2b636;
  font-weight: 700;
  font-family: Karla, sans-serif;
  flex: 0 0 58.333333%;
  max-width: 58.333333%;
  padding-right: 15px;
  padding-left: 15px;
`;

export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

export const Tiles = styled.div`
  max-width: 600px;
  margin-right: auto;
  margin-left: auto;
`;
