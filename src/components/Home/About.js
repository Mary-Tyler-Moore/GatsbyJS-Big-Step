import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
import Img from "gatsby-image"
//import AniLink from "gatsby-plugin-transition-link/anilink"
// import img from "../../images/defaultBcg.jpeg"
import { useStaticQuery, graphql } from "gatsby"

const About = () => {
  const { aboutImage } = useStaticQuery(
    graphql`
      query {
        aboutImage: file(relativePath: { eq: "defaultBg.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  )

  return (
    <section className={styles.about}>
      <Title title="our process" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            {/* <img src={img} alt="about company" /> */}
            <Img
              fluid={aboutImage.childImageSharp.fluid}
              alt="about big step"
            />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>explore the difference</h4>
          <p>
            A whole and fulfilling life is really the point of recovery. While
            that means something different to everyone, the program at Big Step
            is designed to rapidly integrate men & women back into life.
          </p>
          <button type="button" link to="/tours" className="btn-primary">
            learn more
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
