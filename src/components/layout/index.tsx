import Image from 'next/image';
import React from 'react';
import styles from '../../styles/Home.module.css';
import BackToTop from '../backToTop';
import Navbar from '../navbar';

const Layout: React.FC<any> = ({children}) => {


    return (
        <div>
            <Navbar />
            {children}
            <footer className={styles.footer}><Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /></footer>
            <BackToTop />
        </div>

    )
}

export default Layout