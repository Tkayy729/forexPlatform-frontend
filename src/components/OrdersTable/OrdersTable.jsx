import React from "react";
import "./OrdersTable.css";

const OrdersTable = ({data}) => {
  
  const hasScroll = data.length > 20;

  return (
    <div className={`table-container${hasScroll ? " has-scroll" : ""}`}>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Amount</th>
            <th>Exchange</th>
            <th>Provider</th>
            <th>Bank Account</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
           {data && data.map((order) => (
            <tr key={order.orderId}>
              <td>{order.orderId}</td>
              <td>{order.amount}</td>
              <td>{order.exchange}</td>
              <td>{`Provider ${order.provider}`}</td>
              <td>{order.bankAccount.bankName} {order.bankAccount.accountNumber}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
