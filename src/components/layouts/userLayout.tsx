import Image from 'next/image';
import React, { ReactNode, useEffect, useState } from 'react';
import styles from '../../styles/Home.module.css';
import BackToTop from '../backToTop';
import Navbar from '../navbar';
import { motion } from 'framer-motion';
import Loading from '../shared/loading';
import Router, { useRouter } from 'next/router';
import useAuth from '../../fundamental/hooks/useAuth';
import { useAppSelector } from '../../fundamental/hooks';
import { RootState } from '../../fundamental/store';

interface Props {
    children: ReactNode
}


const UserLayout: React.FC<Props> = ({ children }) => {



    // managing auth with swr start
    const { user, loading, error } = useAuth();
    if (loading) return <Loading justSpinner={true} fullPage={true} />

    // useEffect(() => {
        if (!user){
             Router.replace("/");
             return <></>
            }
    // }, [user]);


    // managing auth with swr end

    // managing auth with redux start
    // const user = useAppSelector((state: RootState) => state.auth.user);
    // loading for render process start
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //  setTimeout is for test loading
    //     setTimeout(() => {

    //         setLoading(false);
    //     }, 3000)
    // }, []);
    //if (loading) return <Loading justSpinner={true} fullPage={true} />
    // loading for render process end
    // managing auth with redux end


    console.log("UserLayout");

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

export default UserLayout