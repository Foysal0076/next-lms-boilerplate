import React from 'react'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'
import styles from './Layout.module.css'

const Layout = ({ children }) => {
    return (
        <div id={styles.pageContainer}>
            {/* Will Contain Header, Main Body and Footer */}
            <div id={styles.contentWrap}>
                <Navbar />
                {children}
            </div>
            <div id={styles.footer}>
                <Footer />
            </div>
        </div>
    )
}

export default Layout