import React from 'react'
import Link from 'next/link'
import styles from './Logo.module.css'

const Logo = () => {
  return (
    <div className={styles.logo}>
    <Link href="/">Hero Gym</Link>
  </div>
  )
}

export default Logo