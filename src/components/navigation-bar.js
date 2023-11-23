import React, { useState } from "react"
import { Nav, Navbar, Modal } from "react-bootstrap"
import styled from "styled-components"
import "../App.css"

function NavigationBar({ className }) {
  const [isNavOpen, setNavOpen] = useState(false)

  const handleNavToggle = () => {
    setNavOpen(!isNavOpen)
  }

  const handleCloseNav = () => {
    setNavOpen(false)
  }
  return (
    <div className={`d-flex flex-col text-white ${className}`}>
      <Navbar className="w-100 p-0 navbar-wrapper" expand="md">
        <Navbar.Brand className="text-white ps-3 fw-bold">
          <div className="nav-logo p-0 m-0">
            <a href="/" className="link">
              <img
                src=".\logo.png"
                width="100"
                className="logo"
                height="60"
                alt="Prajwal's Portfolio App"
              />
            </a>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="navbar-toggler"
          onClick={handleNavToggle}
        >
          <span className={`navbar-toggler-icon ${isNavOpen ? "open" : ""}`} />
        </Navbar.Toggle>
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className={`justify-content-end me-4 ${isNavOpen ? "open" : ""}`}
        >
          <Navbar.Text>
            <div className="me-5 nav-element">
              <a href="/contact" className="link">
                <span className="text-white large prime-text ">
                  <p className="m-0">Contact</p>
                </span>
              </a>
            </div>
          </Navbar.Text>
          <Navbar.Text>
            <div className="me-5 nav-element">
              <a href="/about" className="link">
                <span className="text-white large prime-text ">
                  <p className="m-0">About</p>
                </span>
              </a>
            </div>
          </Navbar.Text>
          <Navbar.Text>
            <div className="nav-element">
              <a href="/work" className="link">
                <span className="text-white large prime-text ">
                  <p className="m-0">Works</p>
                </span>
              </a>
            </div>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={isNavOpen} onHide={handleCloseNav} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            <a href="/" className="link prime-text">
              Prajwal's Portfolio
            </a>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Nav.Link className="prime-text" href="/contact">
            Contact
          </Nav.Link>
          <Nav.Link href="/about" className="prime-text">
            About
          </Nav.Link>
          <Nav.Link className="prime-text" href="/work">
            Works
          </Nav.Link>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default styled(NavigationBar)`
  .logo {
    border-radius: 10px;
  }

  @media (max-width: 575px) {
    .nav-element {
      display: none; /* Hide the navigation elements by default */
    }

    .navbar-toggler {
      background-color: transparent; /* Set the background color of the toggle button to transparent */
      border: none; /* Remove the border of the toggle button */
    }

    .navbar-toggler-icon {
      background-color: transparent; /* Set the color of the toggler bars to transparent */
    }

    .navbar-toggler:focus,
    .navbar-toggler:hover {
      background-color: transparent; /* Set the background color on focus or hover to transparent */
    }

    .navbar-toggler-icon.open {
      /* Styles for the open state, you can customize this based on your design */
      background-color: #fff;
    }
  }
`
