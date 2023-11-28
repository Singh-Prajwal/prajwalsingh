import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"
import "../App.css"
import ProjectDetails from "../components/project-detail"
function Work() {
  return (
    <div>
      <Container className="">
        <Row className="mt-5 ">
          <Col>
            <p className="mb-3 fs-1 prime-text">Projects:</p>
            <h2 className="valencia">
              Each project is developed for a unique purpose.
            </h2>
          </Col>
        </Row>
        <ProjectDetails />
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
