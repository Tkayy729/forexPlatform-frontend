import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../../components/Navbar/Navbar";
import PageHeading from "../../components/PageHeadig/PageHeading";
import { BASE_URL } from "../../Utils/BaseUrl";
import "./BankAccountPage.css";

const BankAccountPage = () => {
  const [bankAccounts, setBankAccounts] = useState([]);
  const [name, setName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const [currency, setCurrency] = useState("");


  const fetchData = async () => {
    const token = localStorage.getItem("authToken");
    try {
      const response = await axios.get(`${BASE_URL}/bankaccounts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      setBankAccounts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newBankAccount = { name, accountNumber, bankName, currency };
    console.log(newBankAccount);
    const token = localStorage.getItem("authToken");

    try {
      const response = await axios.post(
        `${BASE_URL}/bankaccounts`,
        newBankAccount,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);

      if (response.status === 201) {
        toast.success("added bank successfully!");
        Navigate("/banks");
        setAccountNumber("");
        setBankName("");
        setName("");
        setCurrency("");
      }
    } catch (error) {
      console(error)
    }
  };

  return (
    <div className="container">
      <div>
        <Navbar />
        <PageHeading title="Available Offers From Providers" />
      </div>

      <div className="bank-account-registration">
        <div className="registration-form">
          <h2>Register a Bank Account</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <label htmlFor="accountNumber">Account Number:</label>
            <input
              type="text"
              id="accountNumber"
              value={accountNumber}
              onChange={(event) => setAccountNumber(event.target.value)}
            />
            <label htmlFor="bankName">Name Of Bank:</label>
            <input
              type="text"
              id="bankName"
              value={bankName}
              onChange={(event) => setBankName(event.target.value)}
            />
            <label htmlFor="currency">Currency:</label>
            <input
              type="text"
              id="currency"
              value={currency}
              onChange={(event) => setCurrency(event.target.value)}
            />
            <button type="submit">Add Account</button>
          </form>
        </div>

        <div className="bank-accounts-table">
          <h2>Registered Bank Accounts</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Account Number</th>
                <th>Bank Name</th>
                <th>Currency</th>
              </tr>
            </thead>
            <tbody>
              {bankAccounts.map((bankAccount, index) => (
                <tr key={index}>
                  <td>{bankAccount.name}</td>
                  <td>{bankAccount.accountNumber}</td>
                  <td>{bankAccount.bankName}</td>
                  <td>{bankAccount.currency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BankAccountPage;
