import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import MobileNav from './navbar/MobileNav'

const Layout = ({children}) => {
  return (
      <div>
          <Header />
          <MobileNav/>
          {children}
          <Footer/>
    </div>
  )
}

export default Layout