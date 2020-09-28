import React from "react"

import { graphql } from "gatsby"
import GalleryRow from "../components/gallery"
import TuroImage from "../components/turo-image"
import Img from "gatsby-image"

import "../App.scss"
import { Container, Row, Col } from "react-bootstrap"

export const query = graphql`
  {
    allGoogleSheetDataRow {
      edges {
        node {
          make
          model
          class
          eparange
          releasedate
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
            fluid(maxWidth: 800, maxHeight: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    turo: file(relativePath: { eq: "turo-white.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    logo: file(relativePath: { eq: "Logo-Wordmark.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default function Index({ data }) {
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="p-5">
            <h1 className="text-dark text-center font-weight-bold">
              U.S. Buyer's Guide for Battery Electric Vehicles
            </h1>
          </Col>
        </Row>
        <Row className="justify-content-sm-center p-5">
          <Col xs="12" sm="8" md="6" lg="4">
            <h3 className="text-dark text-center font-weight-bold">Created by</h3>
            <a href="http://kilowatt.media">
              <Img fluid={data.logo.childImageSharp.fluid} alt="" />
            </a>
          </Col>
        </Row>
      </Container>
      <Container className="pt-5 justify-content-sm-center bg-dark px-5" fluid>
        <Row className="p-5 justify-content-sm-center">
          <h1 className="text-center text-white">
            <span className="text-secondary">Buy</span> a BEV today
          </h1>
        </Row>
        <GalleryRow data={data} availability="Buy Now" actionText="Buy Now" />
      </Container>
      <Container className="pt-5 justify-content-sm-center bg-dark px-5" fluid>
        <Row className="p-5 justify-content-sm-center">
          <h1 className="text-center text-white">
            <span className="text-secondary">Rent</span> a BEV today on Turo
          </h1>
        </Row>
        <TuroImage data={data} />
      </Container>
      <Container className="pt-5 justify-content-sm-center bg-dark px-5" fluid>
        <Row className="p-5 justify-content-sm-center">
          <h1 className="text-center text-white">
            <span className="text-secondary">Reserve</span> an upcoming BEV
          </h1>
        </Row>
        <GalleryRow
          data={data}
          availability="Reserve Now"
          actionText="Reserve Now"
        />
      </Container>
      <Container className="pt-5 pb-5 justify-content-sm-center bg-dark px-5" fluid>
        <Row className="p-5 justify-content-sm-center ">
          <h1 className="text-center text-white">
            <span className="text-secondary">Watch</span> for BEVs coming soon
          </h1>
        </Row>
        <GalleryRow
          data={data}
          availability="Coming Soon"
          actionText="Learn More"
        />
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
