import React, { memo } from "react"
import styles from "../../css/blog-card.module.css"
import Image from "gatsby-image"

const StaffCard = ({ staff }) => {
  const { name, role, certification, email, image } = staff

  return (
    <article className={styles.staff}>
      <div className={styles.imgContainer}>
        <Image fluid={image.fluid} className={styles.img} />
      </div>
      <div className={styles.footer}>
        <h4>{name}</h4>
        <h5>{role}</h5>
        <h5>{certification}</h5>
        <h5>{email}</h5>
      </div>
    </article>
  )
}

export default memo(StaffCard)
