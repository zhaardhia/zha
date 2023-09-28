import React, { FC, ReactNode, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

interface Child {
  children: ReactNode | null
}

const Layout: FC<Child> = ({ children }) => {
  return (
    <div className="w-[70%] max-w-[1000px] mx-auto">
      <Navbar />
      <div className="">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout