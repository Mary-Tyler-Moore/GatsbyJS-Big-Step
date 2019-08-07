import React from "react"
import styled from "styled-components"
import Title from "../Title"
import { StaticQuery, graphql } from "gatsby"
import { styles, Section } from "../../utils"
import Img from "gatsby-image"

export default function Gallery() {
  return (
    <StaticQuery
      query={graphql`
        {
          img1: file(relativePath: { eq: "homeGallery/staff-1.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          img2: file(relativePath: { eq: "homeGallery/staff-2.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          img3: file(relativePath: { eq: "homeGallery/staff-3.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          img4: file(relativePath: { eq: "homeGallery/staff-4.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          img5: file(relativePath: { eq: "homeGallery/staff-5.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          img6: file(relativePath: { eq: "homeGallery/staff-6.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          img7: file(relativePath: { eq: "homeGallery/staff-7.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          img8: file(relativePath: { eq: "homeGallery/staff-7.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          img9: file(relativePath: { eq: "homeGallery/staff-7.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      `}
      render={data => {
        const img1 = data.img1.childImageSharp.fluid
        const img2 = data.img2.childImageSharp.fluid
        const img3 = data.img3.childImageSharp.fluid
        const img4 = data.img4.childImageSharp.fluid
        const img5 = data.img5.childImageSharp.fluid
        const img6 = data.img6.childImageSharp.fluid
        const img7 = data.img7.childImageSharp.fluid
        const img8 = data.img8.childImageSharp.fluid
        const img9 = data.img9.childImageSharp.fluid
        return (
          <Section>
            <Title title="our staff" />
            <GalleryWrapper>
              <div className="item item-1">
                <Img fluid={img1} />
                <p className="info-a">Heath Browning</p>
                <p className="info-b">Co-Founder/Counselor</p>
                <p className="info-b">LPC, MAC, NCC</p>
              </div>
              <div className="item item-2">
                <Img fluid={img2} />
                <p className="info-a">Stuart Gregory</p>
                <p className="info-b">Co-Founder/COO/Admissions</p>
                <p className="info-c">some text</p>
              </div>
              <div className="item item-3">
                <Img fluid={img3} />
                <p className="info-a">Brandon O'Mahoney</p>
                <p className="info-b">Co-Founder/CFO</p>
                <p className="info-c">some text</p>
              </div>
              <div className="item item-4">
                <Img fluid={img4} />
                <p className="info-a">John Capachione</p>
                <p className="info-b">Clinical Director/Counselor</p>
                <p className="info-b">M.ED, LPC, CLEP, SAP, RTT</p>
              </div>
              <div className="item item-5">
                <Img fluid={img5} />
                <p className="info-a">Dr. Charlie Dean, MD</p>
                <p className="info-b">Medical Director/Physician</p>
                <p className="info-c">some text</p>
              </div>
              <div className="item item-6">
                <Img fluid={img6} />
                <p className="info-a">Janet Scott</p>
                <p className="info-b">Counselor/Adolescents</p>
                <p className="info-b">LPC, CAADC, NCC</p>
              </div>
              <div className="item item-7">
                <Img fluid={img7} />
                <p className="info-a">Mark Garno</p>
                <p className="info-b">Counselor</p>
                <p className="info-b">CAC II, CCS (retired)</p>
              </div>
              <div className="item item-8">
                <Img fluid={img8} />
                <p className="info-a">Raymond Scott</p>
                <p className="info-b">Counselor</p>
                <p className="info-b">CAC II, CCS</p>
              </div>
              <div className="item item-9">
                <Img fluid={img9} />
                <p className="info-a">some text</p>
                <p className="info-b">some text</p>
                <p className="info-b">some text</p>
              </div>
            </GalleryWrapper>
          </Section>
        )
      }}
    />
  )
}

const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 1rem;
  margin-left: 3rem;
  margin-right: 3rem;
  .item {
    position: relative;
  }
  .info-a {
    text-align: center;
    line-height: 1rem;
    padding-top: 2rem;
    font-size: 1.5rem;
  }
  .info-b {
    text-align: center;
    line-height: 1rem;
    font-size: 1rem;
  }
  .info-c {
    text-align: center;
    line-height: 1rem;
    font-size: 1rem;
    color: #fff;
  }
  .info {
    position: absolute;
    top: 0;
    left: 0;
    background: ${styles.colors.mainYellow};
    padding: 0.1rem 0.3rem;
    text-transform: capitalize;
  }
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 992px) {
    .gatsby-image-wrapper {
      height: 100%;
    }
    grid-template-areas:
      "one two three"
      "four five six"
      "seven eight nine";

    .item-1 {
      grid-area: one;
    }
    .item-2 {
      grid-area: two;
    }
    .item-3 {
      grid-area: three;
    }
    .item-1 {
      grid-area: four;
    }
    .item-2 {
      grid-area: five;
    }
    .item-3 {
      grid-area: six;
    }
    .item-1 {
      grid-area: seven;
    }
    .item-2 {
      grid-area: eight;
    }
    .item-3 {
      grid-area: nine;
    }
  }
`
