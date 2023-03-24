import React from 'react';
import "./OrdersTable.css";

const OrdersTable = () => {
    const data = [
        { id: 1, amount: 50, age: 25, gender: 'Male', occupation: 'Developer', country: 'USA', status:"FULFILLED"},
        { id: 2, amount: 895, age: 30, gender: 'Female', occupation: 'Designer', country: 'Canada', status: "PENDING"},
        { id: 3, amount: 'Bob', age: 35, gender: 'Male', occupation: 'Engineer', country: 'UK', status: "PENDING" },
        { id: 1, amount: 50, age: 25, gender: 'Male', occupation: 'Developer', country: 'USA', status:"FULFILLED" },
   
      
      
      ];
      const hasScroll = data.length > 20;

      return (
        <div className={`table-container${hasScroll ? ' has-scroll' : ''}`}>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Amount</th>
          <th>Age</th>
          <th>Exchange</th>
          <th>Provider</th>
          <th>Bank Account</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.amount}</td>
            <td>{item.age}</td>
            <td>{item.gender}</td>
            <td>{item.occupation}</td>
            <td>{item.status}</td>
            <td>{item.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default OrdersTable;