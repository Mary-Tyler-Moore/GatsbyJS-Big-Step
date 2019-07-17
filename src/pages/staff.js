import React, { memo } from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { graphql } from "gatsby"
import Staff from "../components/Staff/Staff"
import SEO from "../components/SEO"

const staff = ({ data }) => {
  return (
    <Layout>
      <SEO title="Contact" />
      <StyledHero img={data.bcg.childImageSharp.fluid}>
        <Banner
          title="THE STAFF AT BIG STEP"
          info="WITH OVER 120 YEARS OF COMBINED EXPERIENCE THERE IS NO BETTER PLACE FOR TREATMENT FROM SUBSTANCE ABUSE."
        >
          <AniLink fade to="/tours" className="btn-white">
            View Programs
          </AniLink>
        </Banner>
      </StyledHero>
      <Staff />
    </Layout>
  )
}

export const query = graphql`
  query {
    bcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    allContentfulStaff(sort: { fields: slug, order: ASC }) {
      edges {
        node {
          name
          role
          certification
          email
          slug
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default staff
