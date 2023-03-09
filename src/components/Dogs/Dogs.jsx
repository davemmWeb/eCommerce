import React from 'react'
import { dogs } from '../../data'
import styles from './Dogs.module.css'


const Dogs = () => {
  return ( 
    <div className={styles.container}>
    <h2 className={styles.title}>Products Dogs</h2>    
      {
        dogs.map((value,index)=>{
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

export default Dogs