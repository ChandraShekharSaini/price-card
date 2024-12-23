import React from 'react'
import styles from './Styles/card.module.css'

const Card = ({ data , style }) => {

    console.log(data)
    console.log(style)
    return (

        <div className={styles.container}>

            <div className={styles.plan}>
                <p>{data.plan}</p>
            </div>
            <div className={styles.details}>
                <p><span className={styles.price}>{data.price} </span ><span className={styles.time}>{data.time}</span></p>
                <p>{data.users}</p>
                <p>{data.storage}</p>
                <p>{data.email}</p>
                <p>{data.help}</p>
            </div>
            <button style={style} ><p>{data.signup}</p></button>

        </div >
    )
}

export default Card