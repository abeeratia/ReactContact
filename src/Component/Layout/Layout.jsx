import React, { Component } from 'react';
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import Footer from './../Footer/Footer';
import Headfoot from '../Headfoot/Headfoot';

class Layout extends Component {
    render() {
        return (
            <>
            <Navbar/>
          <Outlet/>
      <Headfoot/>
          <Footer/>
            </>
        );
    }
}

export default Layout;