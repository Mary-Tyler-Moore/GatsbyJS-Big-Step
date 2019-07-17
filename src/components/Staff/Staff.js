import React from "react"
import Title from "../Title"
import { useStaticQuery, graphql } from "gatsby"
import styles from "../../css/blog.module.css"
import StaffCard from "./StaffCard"
const getStaff = graphql`
  query {
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
const Staff = () => {
  const { staff } = useStaticQuery(getStaff)

  return (
    <section className={styles.blog}>
      <Title title="our" subtitle="staff" />
      <div className={styles.center}>
        {staff.edges.map(({ node }) => {
          return <StaffCard key={node.id} staff={node} />
        })}
      </div>
    </section>
  )
}

export default Staff
