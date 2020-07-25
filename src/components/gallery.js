import React from "react"

import { Row } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import CarImage from "./car-image"

export default function GalleryRow({ data, availability }) {
  const files = data.allFile.edges
  const objects = data.allGoogleSheetDataRow.edges
  const models = objects.filter(obj => {
    return obj.node.availability === availability && obj.node.image
  })

  var elements = []

  for (let i = 0; i < models.length; i++) {
    const model = models[i]
    const image = files.find(f => {
      return f.node.relativePath === model.node.image
    })

    elements.push(<CarImage model={model} image={image}></CarImage>)
  }

  return <Row className="p-5">{elements}</Row>
}
