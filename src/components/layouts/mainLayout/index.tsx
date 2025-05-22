import React, { ReactNode, useEffect } from 'react';
import BackToTop from '../../common/backToTop';
import { motion } from 'framer-motion';
import useAuth from '../../../fundamental/hooks/useAuth';
// import { useRouter } from 'next/navigation';
import Loading from '../../common/loading';
import Navbar from '../../common/navbar';
import Footer from '@/components/common/footer';

interface Props {
    children: ReactNode
}

const MainLayout: React.FC<Props> = ({ children }) => {

    // managing auth with swr start
    const { user, loading, error } = useAuth();
    
    // const router = useRouter();
    console.log({user, loading, error})
    useEffect(() => {
       
        if (user) {
            // router.replace("/panel");
        }
    }, [user]);

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
    if (loading) return <Loading justSpinner={true} fullPage={true} />
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1, }, }}>
            <div dir='rtl'>
                <Navbar isAuthentacted={!!user} />
                {children}
                <Footer />
                <BackToTop />
            </div>
        </motion.div>
    )
}

export default MainLayout