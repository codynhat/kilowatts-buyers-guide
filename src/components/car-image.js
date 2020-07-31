import React, { useState } from "react"

import { Col } from "react-bootstrap"
import Img from "gatsby-image"
import "bootstrap/dist/css/bootstrap.min.css"
import moment from "moment"

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

export default function CarImage({ model, image }) {
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
    <Col className="p-1 m-auto" xs="12" sm="6" md="4" lg="3">
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
                textAlign: "center",
                verticalAlign: "middle",
              }}
            >
              <h3 className="p-2 pl-3 pr-3 mt-3 font-weight-bold">
                {model.node.make} {model.node.model}
              </h3>
              <span>
                {model.node.class}
                <br />
                {rangeOrDate}
              </span>
            </div>
          </>
        )}
      </a>
    </Col>
  )
}
