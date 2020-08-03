import React, { useState } from "react"

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
  const [isOverlayShown, setIsOverlayShown] = useState(false)

  var rangeOrDate
  if (model.node.eparange != null) {
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

  return (
    <>
      <Col
        className="d-none d-sm-inline p-1 m-auto"
        xs="12"
        sm="10"
        md="5"
        lg="4"
        xl="3"
      >
        <a
          href={model.node.link}
          onMouseEnter={() => setIsOverlayShown(true)}
          onMouseLeave={() => setIsOverlayShown(false)}
        >
          <Img fluid={image.node.childImageSharp.fluid} alt="" />
          {isOverlayShown && (
            <>
              <div
                className="position-absolute align-middle bg-secondary"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "100%",
                  height: "100%",
                  minHeight: "190px",
                  opacity: "0.75",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              ></div>
              <div
                className="position-absolute align-middle text-dark"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "100%",
                  height: "100%",
                  minHeight: "190px",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                <h3 className="pt-auto pb-auto pl-3 pr-3 mt-3 font-weight-bold">
                  {model.node.make} {model.node.model}
                </h3>
                <div className="pb-2">
                  {model.node.class}
                  <br />
                  {rangeOrDate}
                </div>
                <Button variant="dark">{actionText}</Button>
              </div>
            </>
          )}
        </a>
      </Col>
      <Card
        bg="secondary"
        className="d-inline d-sm-none mt-2 mb-2"
        style={{ width: "100%" }}
      >
        <Img
          className="card-img-top"
          fluid={image.node.childImageSharp.fluid}
          alt=""
        />
        <Card.Body>
          <Card.Title>
            {model.node.make} {model.node.model}
          </Card.Title>
          <Card.Text>
            {model.node.class}
            <br />
            {rangeOrDate}
          </Card.Text>
          <Button variant="dark">{actionText}</Button>
        </Card.Body>
      </Card>
    </>
  )
}
