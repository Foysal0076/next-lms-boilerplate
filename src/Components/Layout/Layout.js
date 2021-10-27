import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from './Footer/Footer'

const Layout = ({ children }) => {
    return (
        <div>
            {/* Will Contain Header, Main Body and Footer */}
            <Navbar />
            {children} 
            <Footer />
        </div>
    )
}

export default Layout