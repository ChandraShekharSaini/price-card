import React from 'react'
import Card from './Card'
import styles from './Styles/app.module.css'

const App = () => {

  const heading = {
    heading: "Pricing"
  }

  const details = {
    details: "Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization."
  }


  const card1 = {
    plan: "Free",
    price: "$0",
    time: "/mo",
    users: "10 users included",
    storage: "2 GB of storage",
    email: "Email support",
    help: "Help center access",
    signup: "Signup for free"
  }


  const card2 = {
    plan: "Pro",
    price: "$15",
    time: "/mo",
    users: "20 users included",
    storage: "10 GB of storage",
    email: "Priority email support",
    help: "Help center access",
    signup: "Get started"
  }


  const card3 = {
    plan: "Enterprise",
    price: "$29",
    time: "/mo",
    users: "30 users included",
    storage: "15 GB of storage",
    email: "Phone and email support",
    help: "Help center access",
    signup: "Contact us"
  }

  const buttonStyle = {
    border: "1px solid rgb(0, 122, 255)",
    backgroundColor: "rgb(0, 122, 255)",
    fontSize: "17px",
    color: "white",
    padding: "0px 60px;",
    marginBottom: "20px",
  }
  return (
    <div className={styles.container}>

      <div className={styles.containerDetails}>
        <h1>{heading.heading}</h1>
        <p>{details.details}</p>
      </div>

      <div className={styles.subcon}>

        <Card data={card1} />
        <Card data={card2}  style={buttonStyle} />
        <Card data={card3}  style={buttonStyle} />

      
      </div>

    </div>
  )
}

export default App