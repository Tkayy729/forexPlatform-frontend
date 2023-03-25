import React from 'react'
import { Link } from 'react-router-dom';
import "./DataCard.css"

const DataCard = (props) => {
  return (
    <div className="card">
      <h2>Provider {props.provider}</h2>
      <p>Exchange : {props.exchange}</p>
      <p>Amount : {props.amount}</p>
    <Link to="/placeOrder"> <button>place order</button></Link> 
    </div>
  )
}

export default DataCard;