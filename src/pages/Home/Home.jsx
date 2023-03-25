import React, { useState, useEffect } from "react";
import axios from "axios";
import DataCard from "../../components/DataCard/DataCard";
import "./Home.css"
import PageHeading from "../../components/PageHeadig/PageHeading";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { BASE_URL } from "../../Utils/BaseUrl";

const Home = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const token = localStorage.getItem("authToken");
    try {
      const response = await axios.get(`${BASE_URL}/provider`, {
        headers: {
          Authorization: `Bearer ${token}`,
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

  return <div className="container">
    <Navbar />
     <PageHeading title="Available Offers From Providers" />
    <div className="providerdata">
    {
       data.map((card)=> {
        return <DataCard key={card.id} {...card} />
      })
    }
  
    </div>
   <Footer />
  </div>;
};

export default Home;
