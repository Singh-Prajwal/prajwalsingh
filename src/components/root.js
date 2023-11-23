import React from "react"
import "../App.css"
import "../fonts/fonts.css"
import styled from "styled-components"

function Root({ className }) {
  return (
    <div className={`welcome-container welcome-text ${className}`}>
      <div className="message">Prajwal Singh</div>
      <div className="descp-message">UI/UX Developer & Engineer</div>
    </div>
  )
}

export default styled(Root)`
  .welcome-text {
    opacity: 0;
    animation: fadeIn 2s ease-in-out forwards;
  }

  .welcome-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .descp-message {
    position: relative;
    font-family: calibri;
    font-size: 40px;
    z-index: 1;
    text-align: center;
    margin-top: 20px;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .message {
    font-size: 140px;
    font-family: Valencia;
    text-align: center;
  }

  @media (max-width: 768px) {
    .message {
      font-size: 100px;
    }

    .descp-message {
      font-size: 24px;
    }
  }

  @media (max-width: 576px) {
    .message {
      font-size: 80px;
    }

    .descp-message {
      font-size: 20px;
    }
  }
`
