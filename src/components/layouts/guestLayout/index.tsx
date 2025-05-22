import React, { ReactNode, useEffect } from 'react';
import { motion } from 'framer-motion';
import useAuth from '@/fundamental/hooks/useAuth';
import { useRouter } from 'next/navigation';
import Loading from '@/components/common/loading';
import Navbar from '@/components/common/navbar';
import BackToTop from '@/components/common/backToTop';
import Footer from '@/components/common/footer';

interface Props {
    children: ReactNode
}
const GuestLayout: React.FC<Props> = ({ children }) => {

    // managing auth with swr start
    const { user, loading, error } = useAuth();
   
    const router = useRouter();
    useEffect(() => {
        if (user) {
            router.replace("/");
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
                <Navbar isAuthentacted={false} />
                {children}
                <Footer />
                <BackToTop />
            </div>
        </motion.div>
    )
}

export default GuestLayout