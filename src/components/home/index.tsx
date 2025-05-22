'use client';
import React from 'react';
import SliderSweaper from './sliderSweaper';
import Products from './products';
import {  useAppSelector } from '@/fundamental/hooks';
import { useRouter } from 'next/navigation';


const Home: React.FC = () => {

    const router = useRouter();

    const token = useAppSelector((state) => state.auth.verifyToken);


    if (token) {
        router.push('/panel');
        return <></>
    }

    return (
        <div>
            <SliderSweaper />
            <Products />
        </div>

    )
}

export default Home