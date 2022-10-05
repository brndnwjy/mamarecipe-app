import React from 'react'
import styles from './banner.module.css'
import logo from '../../../assets/logo.svg'

const Banner = () => {
  return (
    <div className={styles.banner}>
      <img src={logo} alt="Mamarecipe logo" />
      <h2>Mama Recipe.</h2>
    </div>
  )
}

export default Banner