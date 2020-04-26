import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Contact = ({
  companyAddress: { city, streetAddress1, streetAddress2, phone, postalCode },
}) => (
  <Container>
    <Title>Get in touch with us</Title>
    <Card>
      <Row>
        <Subtitle>VISITA NUESTRO LOCAL EN</Subtitle>
        <Text>
          {streetAddress1}
          <br />
          {streetAddress2}
          <br />
          {postalCode}
          <br />
          {city}
        </Text>
      </Row>
      <Row>
        <Subtitle>CONTACTEN POR</Subtitle>
        <Text>hola@ohio.colabr.io</Text>
        <Text>{phone}</Text>
      </Row>
    </Card>
  </Container>
);

// Contact.propTypes = {
//   name: PropTypes.string,
//   description: PropTypes.string,
//   companyAddress: {
//     streetAddress1: PropTypes.string,
//     streetAddress2: PropTypes.string,
//     phone: PropTypes.string,
//     postalCode: PropTypes.string,
//   },
// };

Contact.defaultProps = {
  companyAddress: {
    phone: "",
  },
};

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
