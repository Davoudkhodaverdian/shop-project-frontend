import type { NextPage } from 'next';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import Navbar from '../navbar';


const Layout: NextPage<any> = ({children}) => {


    return (
        <div>
            <Navbar />
            {children}
            <footer className={styles.footer}><Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /></footer>
        </div>
    )
}

export default Layout