import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import OrdersTable from '../../components/OrdersTable/OrdersTable'
import PageHeading from '../../components/PageHeadig/PageHeading'

const Orders = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const token = localStorage.getItem("authToken");
    try {
      const response = await axios.get('http://localhost:8081/api/v1/orders', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response)
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
   fetchData();
  }, []);
  return (
    <div>
        <Navbar />
        <PageHeading title="Your Orders"/>
        <OrdersTable data={data} />
    </div>
  )
}

export default Orders