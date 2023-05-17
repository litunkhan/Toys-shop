/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from './pages/shared/Navbar/Navbar';
import {  Outlet} from 'react-router-dom'
import Footer from './pages/shared/footer/Footer';

const App = () => {
  return (
    <div className='max-w-[1200px] mx-auto'>
       <Navbar></Navbar>
       <Outlet />
       <Footer></Footer>
    </div>
  );
};

export default App;
