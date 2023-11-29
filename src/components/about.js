import React from "react"
import "../App.css"
import styled, { keyframes } from "styled-components"
import { Container, Row, Col } from "react-bootstrap"

const borderRadiusAnimation = keyframes`
  0% {
    border-radius: 50%;
  }

  50% {
    border-radius: 10%;
  }

  100% {
    border-radius: 35%;
  }
`

const shakeAnimation = keyframes`
  0% {
    transform: translateX(0);
  }

  25% {
    transform: translateX(-5px);
  }

  50% {
    transform: translateX(5px);
  }

  75% {
    transform: translateX(-5px);
  }

  100% {
    transform: translateX(0);
  }
`

const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

function About({ className }) {
  return (
    <div className={`${className}`}>
      <Container>
        <Row>
          <Col className="mt-3">
            <div>
              <AvatarContainer>
                <p className="open-sans large fw-bold">Prajwal Singh </p>
                <img
                  className="profile-logo "
                  src="./anime.png"
                  alt="Avatar"
                ></img>
                <label className="open-sans medium">My Avatar</label>
              </AvatarContainer>
            </div>
          </Col>
        </Row>
        <Row className="">
          <Col>
            <div>
              <span className="salute me-4">Hi,</span>
              <img src="./hi.jpg" className="mb-5 profile-logo shake"></img>
              <br />
              <span className="open-sans large">
                I am Prajwal, a passionate full stack developer based in Delhi,
                India. My core skills are clean code, problem-solving,
                algorithms, tech adaption. <br />
                This portfolio app is created with ReactJS & Node.js and is
                still in development, please feel free to explore.
                <br />
                Thanks! for visiting the app.
              </span>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mt-4 mb-3 ">
          <Col
            sm={12}
            className="open-sans fw-bold d-flex justify-content-center large"
          >
            Tech Stack:
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col sm={3} className=" d-flex justify-content-center">
            <img className="tech-icon" src="./html-5.png" alt="HTML5"></img>
            <img className="tech-icon" src="./css-3.png" alt="CSS3"></img>
          </Col>
          <Col sm={3} className=" d-flex justify-content-center">
            <img className="tech-icon" src="./js.png" alt="JavaScript"></img>
            <img
              className="tech-icon"
              src="./typescript.png"
              alt="TypeScript"
            ></img>
          </Col>
          <Col sm={3} className=" d-flex justify-content-center">
            <img
              className="tech-icon"
              src="./python.png"
              alt="JavaScript"
            ></img>
            <img className="tech-icon" src="./react.png" alt="React"></img>
          </Col>
          <Col sm={3} className=" d-flex justify-content-center">
            <img className="tech-icon" src="./nodejs.png" alt="Node.js"></img>
            <img className="tech-icon" src="./express.png" alt="Node.js"></img>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default styled(About)`
  .salute {
    font-family: Valencia;
    font-size: 100px;
  }
  .profile-logo {
    height: 100px;
    border-radius: 40%;
    user-select: none;
    animation: ${borderRadiusAnimation} 2s ease-in-out infinite alternate;
  }
  .shake {
    animation: ${shakeAnimation} 2s ease-in-out infinite;
  }
  &:hover .profile-logo {
    border-radius: 10%; /* Change to your desired border-radius on hover */
  }
  .tech-icon {
    height: 50px;
    margin-right: 5px;
    margin-bottom: 10px;
  }
  .tech-icon:hover {
    height: 53px;
  }

  @media (max-width: 768px) {
    .open-sans.large {
      font-size: 24px;
    }
    .open-sans.medium {
      font-size: 18px;
    }
    .tech-icon {
      height: 40px;
      margin-bottom: 8px;
      margin-right:10px;
      margin-left:10px;
    }
  }
`
