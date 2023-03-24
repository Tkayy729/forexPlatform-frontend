import React from 'react'
import "./DataCard.css"

const DataCard = (props) => {
  return (
    <div className="card">
      <h2>Provider {props.provider}</h2>
      <p>Exchange : {props.exchange}</p>
      <p>Amount : {props.amount}</p>
      <button>place order</button>
    </div>
  )
}

export default DataCard;