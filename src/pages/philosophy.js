import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Services from "../components/Home/Philosophy"
//import Philosophy from "../components/Philosophy/Philosophy"
import SEO from "../components/SEO"

const philosophy = ({ data }) => {
  return (
    <Layout>
      <SEO title="tours" />
      <StyledHero img={data.bcg.childImageSharp.fluid} />
      <Services />
    </Layout>
  )
}
export const query = graphql`
  query {
    bcg: file(relativePath: { eq: "defaultBg.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default philosophy
