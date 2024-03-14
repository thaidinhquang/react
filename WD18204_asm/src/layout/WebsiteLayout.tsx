import React from 'react'

import { Outlet } from "react-router-dom";
import Header from '../components/HomePage/Header';
import Footer from '../components/HomePage/Footer';

export const WebsiteLayout= () => {
  return (
    <div>
    <Header/>
    <Outlet />
    <Footer/>
    </div>
  )
}

export default WebsiteLayout
