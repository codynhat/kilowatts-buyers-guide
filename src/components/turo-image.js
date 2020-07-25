import React, { useState } from "react"

import { Col } from "react-bootstrap"
import Img from "gatsby-image"
import "bootstrap/dist/css/bootstrap.min.css"

export default function TuroImage({ data }) {
  const [isOverlayShown, setIsOverlayShown] = useState(false)

  const image = data.allFile.edges.find(f => {
    return f.node.relativePath === "turo-white.png"
  })

  return (
    <Col className="p-1 m-auto" xs="12" sm="6" md="4" lg="3">
      <a
        href="https://turo.com/us/en/search?fuelTypes=ELECTRIC&location=Current%20location&refreshSearch=true"
        onMouseEnter={() => setIsOverlayShown(true)}
        onMouseLeave={() => setIsOverlayShown(false)}
      >
        <Img fluid={image.node.childImageSharp.fluid} alt="" />
        {isOverlayShown && (
          <div
            className="position-absolute align-middle bg-secondary"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              height: "100%",
              opacity: "0.3",
              textAlign: "center",
              verticalAlign: "middle",
            }}
          ></div>
        )}
      </a>
    </Col>
  )
}
