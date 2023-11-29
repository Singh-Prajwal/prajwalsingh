import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"
import "../App.css"
function Contact() {
  return (
    <div>
      <Container className="m-auto">
        <Row className="mt-5 ">
          <Col>
            <div className="valencia-heading">Contact details:</div>
          </Col>
        </Row>
        <Row className=" mb-3 m-auto ">
          <Col>
            <div className="open-sans large d-flex justify-content-center">
              Don't be shy! hit me up! 👇
            </div>
          </Col>
        </Row>
        <Row className="m-auto d-flex justify-content-center align-items-center">
          <Col className="d-flex mb-2" sm={2}>
            <span className="justify-content-center large-text open-sans me-2">
              LinkedIn :
            </span>
            <span className="cursor link justify-content-center  link">
              <a
                href="https://www.linkedin.com/in/prajwal-singh-8740b4236/"
                target="_blank"
              >
                <img
                  className="icon"
                  // src="https://i.postimg.cc/mrBCfg1S/linkedin.png"
                  src="./linkedin.png"
                />
              </a>
            </span>
          </Col>
          <Col className="d-flex mb-2" sm={2}>
            <span className="justify-content-center open-sans large-text me-2">
              Github :
            </span>
            <span className="justify-content-center link">
              <a href="https://github.com/Singh-Prajwal" target="_blank">
                <img
                  // src="https://i.postimg.cc/GhBpM8zy/github.png"
                  src="./github.png"
                  className="icon"
                />
              </a>
            </span>
          </Col>
          <Col className="d-flex mb-2" sm={1}>
            <span className="justify-content-center open-sans large-text me-2">
              Email's:
            </span>
            <span className="justify-content-center link">
              <a href="mailto:prajwal.singh.226@gmail.com" target="_blank">
                <img
                  // src="https://i.postimg.cc/SsWPQryM/gmail.png"
                  src="./gmail.png"
                  className="icon"
                />
              </a>
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default styled(Contact)`
  .logo {
    border-radius: 10px;
  }
`
