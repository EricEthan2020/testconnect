import React from 'react'
import { Outlet } from 'react-router-dom'
import Container from './Container'
import Header from "./Header";
const Layout = () => {
  return (
   <Container>
        <Header/>
        <Outlet />
   </Container>
  )
}

export default Layout