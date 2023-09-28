import React, { FC, ReactNode, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

interface Child {
  children: ReactNode | null
}

const Layout: FC<Child> = ({ children }) => {
  return (
    <div className="  mx-auto">
      <Navbar />
      <div className="sm:w-[70%] w-[90%] max-w-[1000px] mx-auto">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout