import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../../components/Navbar/Navbar";
import PageHeading from "../../components/PageHeadig/PageHeading";
import { BASE_URL } from "../../Utils/BaseUrl";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  const [bankAccounts, setBankAccounts] = useState();
  const [provider, setProvider] = useState("");
  const [exchange, setExchange] = useState("");
  const [amount, setAmount] = useState();
  const [bankAccountId, setBankAccountId] = useState();

  let navigate = useNavigate();
  const fetchData = async () => {
    const token = localStorage.getItem("authToken");
    try {
      const response = await axios.get(
        `${BASE_URL}/bankaccounts`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      setBankAccounts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleBankChange = (event) => {
    setBankAccountId(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // handle submitting the order data
    console.log({ provider, exchange, amount, bankAccountId });

    const data = { provider, exchange, amount, bankAccountId };
    const token = localStorage.getItem("authToken");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    try {
      const response = await axios.post(`${BASE_URL}/orders`, data, config);
      console.log(response);
      if (response.status === 201 && response.data.status === "FULFILLED") {
        toast.success("Order FULFILLED");
         navigate("/home");
         setAmount("");
      } else if (response.status === 201 && response.data.status === "PENDING"){
        toast.success("Order PENDING");
        navigate("/home");
        setAmount("");
      } else{
        toast.error("Order CANCELLED");
        setAmount("");
      }
    
    } catch (error) {
      if (error.response.status === 409) {
        toast.error("This bank account cannot receive different currency");
        setAmount("");
      }
      toast.error("failed");
    }
  };

  return (
    <div>
      <Navbar />
      <PageHeading title="Place Order"/>

    <div className="form-container">
    <form className="order-form" onSubmit={handleSubmit}>
      <label>
        Select Bank Account:
        <select value={bankAccountId} onChange={handleBankChange}>
        <option>select bank account</option>
          {bankAccounts &&
            bankAccounts.map((bankaccount) => (
              <option type="number" key={bankaccount.id} value={bankaccount.id}>
                {bankaccount.bankName + "-" + bankaccount.accountNumber+"-"+ bankaccount.currency}
              </option>
            ))}
        </select>
      </label>
      <label>
        Currency:
        <input
          type="text"
          value={exchange}
          onChange={(event) => setExchange(event.target.value)}
        />
      </label>
      <label>
        Provider:
        <input
          type="text"
          value={provider}
          onChange={(event) => setProvider(event.target.value)}
        />
      </label>
      <label>
        Amount:
        <input type="number" value={amount} onChange={handleAmountChange} />
      </label>
      <button type="submit">Create Order</button>
    </form>
    </div>
    </div>
  );
};

export default PlaceOrder;
