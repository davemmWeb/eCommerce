import React from 'react'
import { cats } from '../../data'
import styles from './Cats.module.css'


const Cats = () => {
  return ( 
    <div className={styles.container}>
    <h1 className={styles.title}>Products Cats</h1>
      {
        cats.map((value,index)=>{
          return <div key={index} className={styles.containerImage}>
            <img src={value.image} alt={value.name} />
            <p>{value.name}</p>
            <p>{value.price}</p>
          </div>
        })
      }
    </div>  
  
  )
}

export default Cats