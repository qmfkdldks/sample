import React from "react";
import styled from "styled-components";
import { up, down } from "styled-breakpoints";

const Contact = () => (
  <Container>
    <Image src="https://cdn.dribbble.com/users/3989420/screenshots/11090203/media/196ebd1659ffbd5adf1dd6ea0ccf9621.png" />
    <Card>
      <Title>Hey, This is your Weekly</Title>
      <Row>
        <Subtitle>Address</Subtitle>
        <Text>365 Gran Via de Corts, Catalanes, BA 08015</Text>
      </Row>
      <Row>
        <Subtitle>Interested in working with us?</Subtitle>
        <Text>hola@ohio.colabr.io</Text>
      </Row>
      <Row>
        <Subtitle>Phone</Subtitle>
        <Text>Ph: +54 11 6890 5448</Text>
      </Row>
    </Card>
  </Container>
);

export default Contact;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 50px;
`;

const Image = styled.img`
  max-width: 1024px;
  padding: 0px 50px;

  ${down("tablet")} {
    width: 100%;
  }
`;

const Card = styled.div`
  max-width: 500px;
  max-height: 500px;
  background-color: #4582ae;
  font-family: Karla, sans-serif;
  color: #fff;
  border-radius: 20px;
  padding: 10px 55px;

  ${down("tablet")} {
    width: 100%;
  }
`;

const Row = styled.div``;

const Title = styled.h1``;
const Subtitle = styled.h1``;
const Text = styled.p``;
