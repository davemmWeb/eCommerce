import React, { useState } from 'react'
import { cats } from '../../data'
import styles from './Cats.module.css'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/actions'
import { Link } from 'react-router-dom'


const Cats = () => {
  
  const dispatch = useDispatch()

    const addCar = (value) =>{
      dispatch(addProduct(value))
    }

  return (   
      <div className={styles.container}>
      <Link to={'/shoppingCar'}><button className={styles.car}>🚗</button></Link>
        <h1 className={styles.title}>Products Cats</h1>
          {
            cats.map((value,index)=>{
              return <div key={index} className={styles.containerImage}>
                <img src={value.image} alt={value.name} />
                <p>{value.name}</p>
                <p>{value.price}</p>
                <button onClick={()=>addCar(value)}>Add Car</button>
              </div>
            })
          }
        </div>      
  )
}

export default Cats