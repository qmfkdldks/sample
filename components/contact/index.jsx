import React from "react";
import styled from "styled-components";

const Contact = () => (
  <Container>
    <Title>Get in touch with us</Title>
    <Card>
      <Row>
        <Subtitle>VISIT OUR STUDIO AT</Subtitle>
        <Text>365 Gran Via de Corts <br/> Catalanes, BA 08015</Text>
      </Row>
      <Row>
        <Subtitle>OR MESSAGE US</Subtitle>
        <Text>hola@ohio.colabr.io</Text>
        <Text>+54 11 2892 5596</Text>
      </Row>
    </Card>
  </Container>
);

export default Contact;

const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  font-family: Karla, sans-serif;
`;

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Row = styled.div``;

const Title = styled.h2`
  font-size: 3.5rem;
  font-weight: 400;
  color: #182141;
  line-height: 1.2;
`;

const Subtitle = styled.h5`
  color: #f2b636;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1;
  letter-spacing: 1.5px;
  margin-bottom: 27px;
`;

const Text = styled.h4`
  font-size: 2rem;
  font-weight: 400;
  color: #182141;
  line-height: 1.2;
`;
