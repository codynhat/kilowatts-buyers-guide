import React from "react"

import { graphql } from "gatsby"
import GalleryRow from "../components/gallery"
import TuroImage from "../components/turo-image"

import "../App.scss"
import { Container, Row, Col } from "react-bootstrap"

export const query = graphql`
  {
    allGoogleSheetDataRow {
      edges {
        node {
          availability
          link
          image
        }
      }
    }
    allFile {
      edges {
        node {
          relativePath
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default function Index({ data }) {
  return (
    <>
      <Container className="bg-light" fluid>
        <Row>
          <Col className="p-5">
            <h1 className="text-dark text-center font-weight-bold">
              U.S. Buyer's Guide for Battery Electric Vehicles
            </h1>
          </Col>
        </Row>
      </Container>
      <Container className="justify-content-sm-center bg-dark" fluid>
        <Row className="p-5 justify-content-sm-center">
          <h1 className="text-secondary">Buy</h1>
          &nbsp; &nbsp;
          <h1 className="text-light">a BEV today</h1>
        </Row>
        <GalleryRow data={data} availability="Buy Now" />
      </Container>
      <Container className="justify-content-sm-center bg-dark" fluid>
        <Row className="p-5 justify-content-sm-center ">
          <h1 className="text-secondary">Rent</h1>
          &nbsp; &nbsp;
          <h1 className="text-light">a BEV today on</h1>
          &nbsp; &nbsp;
          <h1 className="text-light">Turo</h1>
        </Row>
        <TuroImage data={data} />
      </Container>
      <Container className="justify-content-sm-center bg-dark" fluid>
        <Row className="p-5 justify-content-sm-center">
          <h1 className="text-secondary">Reserve</h1>
          &nbsp; &nbsp;
          <h1 className="text-light">an upcoming BEV</h1>
        </Row>
        <GalleryRow data={data} availability="Reserve Now" />
      </Container>
      <Container className="justify-content-sm-center bg-dark" fluid>
        <Row className="p-5 justify-content-sm-center ">
          <h1 className="text-secondary">Watch</h1>
          &nbsp;&nbsp;
          <h1 className="text-light">for BEVs coming soon</h1>
        </Row>
        <GalleryRow data={data} availability="Coming Soon" />
      </Container>
      <Container>
        <Row className="text-dark p-5 justify-content-sm-center">
          Vehicle images provided courtesy of vehicle manufacturer's website for
          editorial use. Not for reuse or redistribution.
        </Row>
      </Container>
    </>
  )
}
