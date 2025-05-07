import React from 'react'
import AdminIndex from './AdminIndex'
import Account from './Account'
import Product from './Product'
import Order from './Order'

export default function PrivateRouter() {
  return (
    <>
    <AdminIndex/>
    <Account/>
    <Product/>
    <Order/>
    </>
  )
}
