import React from "react"
import Layout from "../components/Layout"
import { Link, graphql } from "gatsby"
import StyledHero from "../components/StyledHero"
import styles from "../css/template.module.css"
import Img from "gatsby-image"
import { FaMoneyBillWave, FaMap } from "react-icons/fa"
import Day from "../components/SingeTour/Day"
import SEO from "../components/SEO"

const Template = ({ data }) => {
  const {
    name,
    country,
    days,
    description: { description },
    images,
    price,
    start,
    journey,
  } = data.contentfulTour
  const [mainImage, ...tourImages] = images

  return (
    <Layout>
      <SEO title={name} />
      <StyledHero img={mainImage.fluid} />
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {tourImages.map((item, index) => {
              return (
                <Img
                  key={index}
                  fluid={item.fluid}
                  alt="single tour"
                  className={styles.image}
                />
              )
            })}
          </div>
          <h2>{name}</h2>
          <div className={styles.info}>
            <p>
              <FaMap className={styles.icon} />
              {country}
            </p>
          </div>
          <div>
            <p className={styles.desc}>{description}</p>
          </div>
          <Link to="/tours" className="btn-primary">
            back to programs
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulTour(slug: { eq: $slug }) {
      name
      price
      country
      days
      images {
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      start(formatString: "dddd MMMM Do, YYYY")
      journey {
        day
        info
      }
      description {
        description
      }
    }
  }
`

export default Template
