import React from 'react'
import PizzaCard from './PizzaCard';

import styles from "../styles/PizzaList.module.css";
function PizzaList({pizzaList}) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Eat Fresh Stay Healthy</h1>
    <p className={styles.desc}>
     Welcome to Trinity Foods ,here we serve food and food items Hot and Fresh Order Food and it will be deliverd to ASAP!!  || ENJOY IT HOT || 

    </p>
       
    <div className={styles.wrapper}>

     {pizzaList.map((pizza)=>(


<PizzaCard key={pizza._id}   pizza={pizza}  />
      
     ))}



       
    </div>
    </div>
  );
};

export default PizzaList
