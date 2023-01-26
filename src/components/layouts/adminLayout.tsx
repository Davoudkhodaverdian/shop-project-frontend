import Image from 'next/image';
import React, { ReactNode, useEffect, useState } from 'react';
import styles from '../../styles/Home.module.css';
import BackToTop from '../backToTop';
import Navbar from '../navbar';
import { motion } from 'framer-motion';
import Loading from '../loading';
import { useRouter } from 'next/router';
import useAuth from '../../app/hooks/useAuth';

interface Props {
    children: ReactNode
}


const AdminLayout: React.FC<Props> = ({ children }) => {

    const router = useRouter();
    const { user, loading ,error} = useAuth();
    if (loading) return <Loading justSpinner={true} fullPage={true} />

        if (!user?.isAdmin) {
            if (user) router.push('/panel');
            else router.push('/');
            return <></>
        }

    


    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1, }, }}>
            <div dir='rtl'>
                <Navbar isAuthentacted={true} />
                {children}
                <footer className={styles.footer}><Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /></footer>
                <BackToTop />
            </div>
        </motion.div>
    )
}

export default AdminLayout