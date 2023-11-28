import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"
import VideoPlayer from "../components/video-player"
import { Link } from "react-router-dom"

function ProjectDetails({ className }) {
  return (
    <div className={` ${className}`}>
      <Container>
        <Row className="project-details">
          <Col sm={12} md={7}>
            <div className="project-description">
              <h2 className="prime-text">
                <Link
                  className="link-i fs-3"
                  target="_blank"
                  to={"https://singh-prajwal.github.io/coindown/"}
                >
                  COINDOWN {' '}
                </Link>
                (Nov-23)
              </h2>
              <p className="prime-text">
                This project is built using the React framework and RESTful
                APIs. The app shows cryptocurrency prices and percentage changes
                in the market, helping in tracking their values.
              </p>
              <a
                href="https://github.com/Singh-Prajwal/coindown/"
                target="_blank"
                className="link-i"
              >
                Link to codebase{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </Col>
          <Col sm={12} md={5}>
            <div className="video-player-container">
              <VideoPlayer videoSource='coindown-prod.mp4' />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default styled(ProjectDetails)`
  .project-details {
    min-height: 65vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 2%;
    transition: box-shadow 0.3s ease;
    margin-bottom: 20px;
  }

  .project-details:hover {
    box-shadow: 2px 10px 20px rgba(0, 0, 0, 0.6);
  }

  .project-description {
    padding: 20px;
  }

  .prime-text {
    font-size: 1.5rem;
  }

  .link-i {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    .project-details {
      flex-direction: column;
    }
    .project-details:hover {
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
    }
  }
`
