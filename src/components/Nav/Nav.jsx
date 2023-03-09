import React from 'react'
import styles from './Nav.module.css'
import { Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

const Nav = () => {
  return (
    <div className={styles.container}>
        <ul>
            <li><Link to={'/cats'}>Cats</Link></li>
            <li><Link to={'/dogs'}>Dogs</Link></li>
            <li><Link to={'/products'}>Products</Link></li>
            <li><Link to={'/learnMore'}>Learn more</Link></li>
            
        </ul>
        
    </div>
  )
}

export default Nav