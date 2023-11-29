import React from "react"
import styled from "styled-components"
import { Container, Col, Row } from "react-bootstrap"
function NotFound({ className }) {
  return (
    <Container className={`open-sans ${className}`}>
      <Row className="justify-content-center mt-5">
        <Col sm={3}>
          <img
            src="/detective.png"
            className=" d-flex justify-content-center notfound m-auto"
            alt="Trying to be Holmes"
          ></img>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="d-flex justify-content-center"  sm={1}>
          <h1>404</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="d-flex justify-content-center" sm={4}>
          <h3>Trying something fishy!.</h3>
        </Col>
      </Row>
    </Container>
  )
}

export default styled(NotFound)`
  .notfound {
    max-width: 315px;
    border-radius: 30%;
  }
`
