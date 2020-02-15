import React, { memo } from "react"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import { Link } from "gatsby"
//import Services from "../components/Home/Services"
import About from "../components/Home/About"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Featured from "../components/Home/Featured"
import SEO from "../components/SEO"
export default memo(({ data }) => {
  const tours = data.tours.edges
  return (
    <Layout>
      <SEO title="Home" />
      <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
        <Banner
          title="START YOUR PATH TO RECOVERY TODAY"
          info="WE'LL SHOW YOU THERE'S LIFE WORTH LIVING IN RECOVERY."
        >
          <AniLink fade to="/tours" className="btn-white">
            View Programs
          </AniLink>
        </Banner>
      </StyledHero>
      <About />
      <Featured tours={tours} />
    </Layout>
  )
})

export const query = graphql`
  {
    defaultBcg: file(relativePath: { eq: "defaultBg.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    tours: allContentfulTour(
      filter: { featured: { eq: true } }
      sort: { fields: price, order: DESC }
    ) {
      edges {
        node {
          name
          price
          slug
          country
          contentful_id
          days
          images {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
