import React from "react"

import { Col } from "react-bootstrap"
import Img from "gatsby-image"
import "bootstrap/dist/css/bootstrap.min.css"
import Button from "react-bootstrap/Button"

export default function TuroImage({ data }) {
  return (
    <Col className="text-center p-auto m-auto" xs="12" sm="6" md="6" lg="3">
      <Img fluid={data.turo.childImageSharp.fluid} alt="" />
      <a href="https://turo.com/us/en/search?fuelTypes=ELECTRIC&location=Current%20location&refreshSearch=true">
        <Button variant="secondary">Learn More</Button>
      </a>
    </Col>
  )
}
