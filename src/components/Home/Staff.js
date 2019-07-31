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
          img1: file(relativePath: { eq: "homeGallery/img-1.png" }) {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          img2: file(relativePath: { eq: "homeGallery/img-2.png" }) {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          img3: file(relativePath: { eq: "homeGallery/img-3.png" }) {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          img4: file(relativePath: { eq: "homeGallery/img-1.png" }) {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          img5: file(relativePath: { eq: "homeGallery/img-2.png" }) {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          img6: file(relativePath: { eq: "homeGallery/img-3.png" }) {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          img7: file(relativePath: { eq: "homeGallery/img-1.png" }) {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          img8: file(relativePath: { eq: "homeGallery/img-2.png" }) {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          img9: file(relativePath: { eq: "homeGallery/img-3.png" }) {
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
              </div>
              <div className="item item-2">
                <Img fluid={img2} />
              </div>
              <div className="item item-3">
                <Img fluid={img3} />
              </div>
              <div className="item item-4">
                <Img fluid={img4} />
              </div>
              <div className="item item-5">
                <Img fluid={img5} />
              </div>
              <div className="item item-6">
                <Img fluid={img6} />
              </div>
              <div className="item item-7">
                <Img fluid={img7} />
              </div>
              <div className="item item-8">
                <Img fluid={img8} />
              </div>
              <div className="item item-9">
                <Img fluid={img9} />
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
  .item {
    position: relative;
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
