import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import OrdersTable from '../../components/OrdersTable/OrdersTable'
import PageHeading from '../../components/PageHeadig/PageHeading'

const Orders = () => {
  return (
    <div>
        <Navbar />
        <PageHeading title="Your Orders"/>
        <OrdersTable />
    </div>
  )
}

export default Orders