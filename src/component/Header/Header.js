import React from 'react'
import styles from './Header.module.css'
import resumeSvg from '../../assets/resume.svg'

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>


      <p className={styles.heading}>A <span>Resume</span> That stands out!</p>
      <p className={styles.heading}>Make your own resume <span>For Free</span> </p>
      </div>
      <div className={styles.right}>
        <img src={resumeSvg}/>

      </div>
    </div>
  )
}

export default Header
