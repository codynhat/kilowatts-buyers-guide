import React from "react"

import { Col } from "react-bootstrap"
import Img from "gatsby-image"
import "bootstrap/dist/css/bootstrap.min.css"
import moment from "moment"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

function dateEstimator(dateStr) {
  const d = moment(dateStr, "MMMM YYYY")
  if (d.month() > 8) {
    return `Late ${d.year()}`
  } else if (d.month() < 3) {
    return `Early ${d.year()}`
  } else if (d.month()) {
    return `Mid ${d.year()}`
  } else {
    return d.year()
  }
}

export default function CarImage({ model, image, actionText }) {
  var rangeOrDate
  if (model.node.eparange != null && actionText === "Buy Now") {
    rangeOrDate = (
      <>
        EPA Range up to{" "}
        <span className="font-weight-bold">{model.node.eparange}</span> miles
      </>
    )
  } else {
    rangeOrDate = (
      <>
        Coming{" "}
        <span className="font-weight-bold">
          {dateEstimator(model.node.releasedate)}
        </span>
      </>
    )
  }

  var goal
  if (actionText === "Buy Now") {
    goal = "fathom.trackGoal('LHUGDJTW', 0);"
  } else if (actionText === "Reserve Now") {
    goal = "fathom.trackGoal('RASPFM9I', 0);"
  } else if (actionText === "Learn More") {
    goal = "fathom.trackGoal('R4L1YBSW', 0);"
  }

  return (
    <>
      <Col className="p-3 m-auto" xs="12" sm="6" md="6" lg="4" xl="3">
        <Card bg="light" className="mt-2 mb-2" style={{ width: "100%" }}>
          <Img
            className="card-img-top"
            fluid={image.node.childImageSharp.fluid}
            alt=""
          />
          <Card.Body>
            <Card.Title>
              <span className="font-weight-bold">
                {model.node.make} {model.node.model}
              </span>
            </Card.Title>
            <Card.Text>
              {model.node.class}
              <br />
              {rangeOrDate}
            </Card.Text>
            <a
              href={model.node.link}
              onclick={goal}
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="secondary">{actionText}</Button>
            </a>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}
