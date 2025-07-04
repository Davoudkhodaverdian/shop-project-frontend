"use client";
import React from 'react';
import Form from './form';
import { motion } from 'framer-motion';
import GuestLayout from '@/components/layouts/guestLayout';

const Login: React.FC = () => {

    return (
        <GuestLayout>
            <motion.div
                initial={{ opacity: 0, x: -900 }}
                animate={{
                    opacity: 1, x: 0, transition: {
                        duration: 0.8,
                    },
                }}
            >
                <div className="flex flex-col justify-center items-center my-10">
                    <div className="md:flex flex-row w-[calc(100%-16px)]  md:max-w-[800px] rounded shadow-lg p-4 bg-white  mx-2">
                        <div className='w-full'>
                            <div className='flex'>
                                <div className='flex  items-center'><img src="/images/logos/logo.svg" width={50} alt="logo" /></div>
                                <div className='flex  items-center'><img src="/images/logos/next-logo.svg" width={50} alt="logo" /></div>
                            </div>
                            <h2 className="mt-6 text-3xl font-extrabold text-gray-900 text-right">ورود</h2>
                            <Form />
                        </div>
                        <div className='w-[800px] md:flex flex-col justify-center items-center hidden p-3'>
                            <img src="/images/auth/undraw_business_shop_re_ruf4.svg" />
                        </div>
                    </div>

                </div>
            </motion.div>
        </GuestLayout>
    );
}

export default Login;