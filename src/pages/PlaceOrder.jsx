import axios from "axios";
import React, { useState } from "react";

const PlaceOrder = () => {
  const [provider, setProvider] = useState("");
  const [currency, setCurrency] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { provider, currency, bankAccount, amount };
    const token = localStorage.getItem("authToken");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    try {
      const response = await axios.post(
        "http://localhost:8081/api/v1/orders/",
        data,
        config
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Place Order</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Provider:
          <select
            type="text"
            value={provider}
            onChange={(e) => setProvider(e.target.value)}
          >
            <option>select provider</option>
            <option>PA</option>
            <option>PC</option>
          </select>
        </label>
        <br />
        <label>
          Currency:
          <select
            type="text"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            required
          >
            <option>select currency</option>
            <option>EUR</option>
            <option>USD</option>
          </select>
        </label>
        <br />
        <label>
          Bank Account:
          <select
            type="bankAccount"
            value={bankAccount}
            onChange={(e) => setBankAccount(e.target.value)}
            required
          >
            <option>Select bank</option>
            <option>Bank A</option>
            <option>Bank A</option>
          </select>
        </label>
        <br />
        <label>
          Amount:
          <input
            type="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">buy</button>
      </form>
    </div>
  );
};

export default PlaceOrder;
