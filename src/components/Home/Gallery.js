import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import { styles, Section } from "../../utils"
import Img from "gatsby-image"

export default function Gallery() {
  return (
    <StaticQuery
      query={graphql`
        {
          img1: file(relativePath: { eq: "homeGallery/gallery-3.png" }) {
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
          img3: file(relativePath: { eq: "homeGallery/gallery-1.png" }) {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          img4: file(relativePath: { eq: "homeGallery/img-4.png" }) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          img5: file(relativePath: { eq: "homeGallery/gallery-4.png" }) {
            childImageSharp {
              fluid(maxWidth: 1000) {
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
        return (
          <Section>
            <GalleryWrapper>
              <div className="item item-1">
                <Img fluid={img1} />
                <p className="info-1">find freedom in healthy living</p>
              </div>
              <div className="item item-2">
                <Img fluid={img2} />
                <p className="info">working together</p>
              </div>
              <div className="item item-3">
                <Img fluid={img3} />
                <p className="info">grow with people like you</p>
              </div>
              <div className="item item-4">
                <Img fluid={img4} />
                <p className="info">learn through others</p>
              </div>
              <div className="item item-5">
                <Img fluid={img5} />
                <p className="info">Our Approach</p>
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
  grid-row-gap: 0rem;
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
  @media (max-width: 990px) {
    grid-template-columns: 1fr;
    grid-column-gap: 0rem;
  }
  .info-1 {
    color: #fff;
    position: absolute;
    top: 15%;
    left: 15%;
    margin-left: -40px;
    padding: 0.1rem 0.3rem;
    text-transform: capitalize;
    text-align: center;
    text-shadow: 1px 2px 0.5px rgba(0, 0, 0, 0.9);
  }

  @media (min-width: 992px) {
    .gatsby-image-wrapper {
      height: 100%;
    }
    .info-1 {
      position: absolute;
      top: 15%;
      left: 10%;
      font-size: 4rem;
      padding: 0.1rem 0.3rem;
      text-transform: capitalize;
      text-shadow: 2px 3px 1px rgba(0, 0, 0, 0.9);
    }
    grid-template-areas:
      "one one two two"
      "one one three three"
      "five four four four"
      "five four four four";
    .item-1 {
      grid-area: one;
    }
    .item-2 {
      grid-area: two;
    }
    .item-3 {
      grid-area: three;
    }
    .item-4 {
      grid-area: four;
    }
    .item-5 {
      grid-area: five;
    }
    .item-6 {
      grid-area: six;
    }
  }
`
