import {  Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"
import "../App.css"
function Work() {
  return (
    <div>
      <Container className="">
        <Row className="mt-3 ">
          <Col>
            <span>
              <p className="m-auto">
                Hi, I am prajwal currently working as full stack developer. My
                core skills are clean code, problem solving, algorithms. <br />
                This portfolio app is created with reactjs & nodejs and is still
                in development, feel free to explore.
                <br />
                <strong>Thanks! for visiting the app.</strong>
              </p>
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default styled(Work)`
  .logo {
    border-radius: 10px;
  }
  // .navbar-wrapper {
  //   display: flex;
  //   align-items: center;
  //   flex-wrap: inherit;
  //   justify-content: space-around;
  //   width: 100%;
  //   margin-right: auto;
  //   margin-left: auto;
  //   text-decoration: none;
  //   background-color: #253551;
  //   background-image: radial-gradient(
  //     circle at top right,
  //     #441d90 0%,
  //     #253551 100%
  //   );
  //   padding-bottom: 4px;
  // }
`
