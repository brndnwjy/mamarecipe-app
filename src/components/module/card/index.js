import React from 'react'

import styles from "./card.module.css"

const Card = ({img, title}) => {
  return (
    <div className={`d-flex flex-column align-items-center ${styles.card}`}>
        <img src={img} alt={title} />
        <span>{title}</span>
    </div>
  )
}

export default Card