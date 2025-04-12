import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Img = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const Name = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 8px;
  padding: 8px 12px 6px;
  border-radius: 8px;
  background: var(--dark-color);
  color: var(--light-color);
  width: 100px;
  text-align: center;
`;

const Number = styled.div`
  font-size: 1.8rem;
`;

const ContactItem = ({ item }) => {
  return (
    <Row>
      <Col xs={3}>
        <Img
          src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
          alt="unknowImg"
        />
      </Col>
      <Col xs={9}>
        <Name>{item?.name}</Name>
        <Number>{item?.phoneNumber}</Number>
      </Col>
    </Row>
  );
};

export default ContactItem;
