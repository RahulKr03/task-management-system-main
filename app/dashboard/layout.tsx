import React from 'react'
import SideNav from './components/SideNav';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className='min-h-screen'>
         <div className="md:w-64 hidden md:block fixed">
          <SideNav />
        </div>
        <div className="md:ml-64 flex flex-col overflow-x-clip">
          <Navbar />
          {children}
          <Footer />
        </div>
    </div>
  )
}

export default Layout