import React from 'react'
import { useSelector } from 'react-redux'
import styles from './ShoppingCar.module.css'


const shoppingCar = () => {

    const products = useSelector(state=>state.shoppingCar)

    console.log(products)
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Shopping Car</h1>
        {
          products.map((value,index)=>{
            return <div key={index} className={styles.containerImage}>
              <img src={value.image} alt={value.name} />
              <p>{value.name}</p>
              <p>{value.price}</p>
              <button onClick={()=>addCar(value)}>Delete</button>
            </div>
          })
        }
      </div>    
  )
}

export default shoppingCar