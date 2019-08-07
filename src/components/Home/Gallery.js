import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import { Section } from "../../utils"
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
                <p className="info-1">freedom in healthy living</p>
              </div>
              <div className="item item-2">
                <Img fluid={img2} />
                <p className="info-2">discover yourself</p>
              </div>
              <div className="item item-3">
                <Img fluid={img3} />
                <p className="info-3">grow with others</p>
              </div>
              <div className="item item-4">
                <Img fluid={img4} />
                <p className="info-4">invigorate your spirit</p>
              </div>
              <div className="item item-5">
                <Img fluid={img5} />
                <p className="info-5">working together</p>
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
    padding: 0.1rem 0.3rem;
    text-transform: capitalize;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-column-gap: 0rem;
  }
  .info-1 {
    color: #fff;
    position: absolute;
    top: 13%;
    left: 13%;
    margin-left: -45px;
    padding: 0.1rem 0.3rem;
    text-transform: capitalize;
    text-align: center;
    text-shadow: 0 0 4px black, 0 0 4px black, 0 0 4px black;
    letter-spacing: 0.3rem;
    line-height: 2.25rem;
    font-size: 2rem;
  }
  .info-2 {
    color: #fff;
    position: absolute;
    top: 62%;
    left: 15%;
    margin-left: -15px;
    padding: 0.1rem 0.3rem;
    text-transform: capitalize;
    text-align: center;
    text-shadow: 0 0 4px black, 0 0 4px black, 0 0 4px black;
    font-size: 2rem;
    letter-spacing: 0.1rem;
  }
  .info-3 {
    color: #fff;
    position: absolute;
    top: 20%;
    left: 10%;
    margin-left: -30px;
    padding: 0.1rem 0.3rem;
    text-transform: capitalize;
    text-align: center;
    text-shadow: 0 0 4px black, 0 0 4px black, 0 0 4px black;
    font-size: 2rem;
  }
  .info-4 {
    color: #fff;
    position: absolute;
    top: 17%;
    left: 5%;
    margin-left: -10px;
    padding: 0.1rem 0.3rem;
    text-transform: capitalize;
    text-align: center;
    text-shadow: 0 0 4px black, 0 0 4px black, 0 0 4px black;
    font-size: 2rem;
  }
  .info-5 {
    color: #fff;
    position: absolute;
    top: 87%;
    left: 4%;
    margin-left: 0px;
    padding: 0.1rem 0.3rem;
    text-transform: capitalize;
    text-align: center;
    text-shadow: 0 0 4px black, 0 0 4px black, 0 0 4px black;
    font-size: 2.25rem;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    .info-1 {
      color: #fff;
      position: absolute;
      top: 15%;
      left: 15%;
      margin-left: -65px;
      padding: 0.1rem 0.3rem;
      text-transform: capitalize;
      text-align: center;
      text-shadow: 0 0 4px black, 0 0 4px black, 0 0 4px black;
      letter-spacing: 0.3rem;
      font-size: 3rem;
      line-height: 3.25rem;
    }
    .info-2 {
      color: #fff;
      position: absolute;
      top: 63%;
      left: 15%;
      margin-left: -65px;
      padding: 0.1rem 0.3rem;
      text-transform: capitalize;
      text-align: center;
      text-shadow: 0 0 4px black, 0 0 4px black, 0 0 4px black;
      letter-spacing: 0.3rem;
      font-size: 3rem;
      line-height: 3.25rem;
    }
    .info-3 {
      color: #fff;
      position: absolute;
      top: 23%;
      left: 5%;
      margin-left: -22px;
      padding: 0.1rem 0.3rem;
      text-transform: capitalize;
      text-align: center;
      text-shadow: 0 0 4px black, 0 0 4px black, 0 0 4px black;
      letter-spacing: 0.3rem;
      font-size: 3rem;
      line-height: 3.25rem;
    }
    .info-4 {
      color: #fff;
      position: absolute;
      top: 23%;
      left: 9%;
      margin-left: -22x;
      padding: 0.1rem 0.3rem;
      text-transform: capitalize;
      text-align: center;
      text-shadow: 0 0 4px black, 0 0 4px black, 0 0 4px black;
      letter-spacing: 0.1rem;
      font-size: 2.75rem;
      line-height: 3.25rem;
    }
    .info-5 {
      color: #fff;
      position: absolute;
      top: 90%;
      left: 5%;
      margin-left: -22px;
      padding: 0.1rem 0.3rem;
      text-transform: capitalize;
      text-align: center;
      text-shadow: 0 0 4px black, 0 0 4px black, 0 0 4px black;
      letter-spacing: 0.3rem;
      font-size: 3rem;
      line-height: 3.25rem;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
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
      letter-spacing: 0.3rem;
      font-size: 3.75rem;
      text-shadow: 0 0 4px black, 0 0 4px black, 0 0 4px black;
      line-height: 4rem;
    }
    .info-2 {
      color: #fff;
      position: absolute;
      top: 65%;
      left: 15%;
      margin-left: -40px;
      padding: 0.1rem 0.3rem;
      text-transform: capitalize;
      text-align: center;
      text-shadow: 1px 2px 0.5px rgba(0, 0, 0, 0.9);
      letter-spacing: 0.3rem;
      font-size: 3.75rem;
      text-shadow: 0 0 4px black, 0 0 4px black, 0 0 4px black;
    }
    .info-3 {
      color: #fff;
      position: absolute;
      top: 23%;
      left: 15%;
      margin-left: -40px;
      padding: 0.1rem 0.3rem;
      text-transform: capitalize;
      text-align: center;
      text-shadow: 1px 2px 0.5px rgba(0, 0, 0, 0.9);
      letter-spacing: 0.3rem;
      font-size: 3.75rem;
      text-shadow: 0 0 4px black, 0 0 4px black, 0 0 4px black;
    }
    .info-4 {
      color: #fff;
      position: absolute;
      top: 23%;
      left: 15%;
      margin-left: -40px;
      padding: 0.1rem 0.3rem;
      text-transform: capitalize;
      text-align: center;
      text-shadow: 1px 2px 0.5px rgba(0, 0, 0, 0.9);
      letter-spacing: 0.3rem;
      font-size: 3.75rem;
      text-shadow: 0 0 4px black, 0 0 4px black, 0 0 4px black;
    }
    .info-5 {
      color: #fff;
      position: absolute;
      top: 90%;
      left: 15%;
      margin-left: -40px;
      padding: 0.1rem 0.3rem;
      text-transform: capitalize;
      text-align: center;
      text-shadow: 1px 2px 0.5px rgba(0, 0, 0, 0.9);
      letter-spacing: 0.3rem;
      font-size: 3.75rem;
      text-shadow: 0 0 4px black, 0 0 4px black, 0 0 4px black;
    }
  }

  @media (min-width: 992px) {
    .gatsby-image-wrapper {
      height: 100%;
    }
    .info-1 {
      position: absolute;
      top: 22%;
      left: 10%;
      font-size: 4rem;
      padding: 0.1rem 0.3rem;
      text-transform: capitalize;
      text-shadow: 0 0 4px black, 0 0 4px black, 0 0 4px black, 0 0 4px black;
      line-height: 4.5rem;
    }
    .info-2 {
      color: #fff;
      position: absolute;
      top: 63%;
      left: 10%;
      margin-left: -14px;
      padding: 0.1rem 0.3rem;
      text-transform: capitalize;
      text-align: center;
      text-shadow: 0 0 4px black, 0 0 4px black, 0 0 4px black;
      font-size: 3rem;
      letter-spacing: 0.3rem;
    }
    .info-3 {
      color: #fff;
      position: absolute;
      top: 20%;
      left: 10%;
      margin-left: -25px;
      padding: 0.1rem 0.3rem;
      text-transform: capitalize;
      text-align: center;
      text-shadow: 0 0 4px black, 0 0 4px black, 0 0 4px black;
      letter-spacing: 0.25rem;
      font-size: 3rem;
    }
    .info-4 {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      margin-left: -90px;
      padding: 0.1rem 0.3rem;
      text-transform: capitalize;
      text-align: center;
      text-shadow: 0 0 4px black, 0 0 4px black, 0 0 4px black, 0 0 4px black;
      font-size: 4rem;
      letter-spacing: 0.1rem;
      line-height: 4.5rem;
    }
    .info-5 {
      color: #fff;
      position: absolute;
      top: 90%;
      left: 20%;
      margin-left: -53px;
      text-transform: capitalize;
      text-align: center;
      text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.9);
      font-size: 1.9rem;
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
