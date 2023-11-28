import React, { useRef, useEffect } from "react"

function VideoPlayer({ videoSource }) {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Autoplay prevented:", error)
      })
    }
  }, [])

  return (
    <video ref={videoRef} controls width="100%" height="auto" muted>
      <source src={videoSource} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}

export default VideoPlayer
