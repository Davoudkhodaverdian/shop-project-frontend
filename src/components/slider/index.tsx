
import { motion } from 'framer-motion';
import type { NextPage } from 'next'
import images from './images';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Navigation, Pagination, Scrollbar } from 'swiper';
const Slide: NextPage = () => {

    return (
        <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{
          opacity: 1, x: 0, transition: {
            duration: 0.8,
          
          },
        }}
        >
            <div className='flex items-center justify-center m-3' >
                <Swiper className='cursor-grab active:cursor-grabbing overflow-hidden mx-6 w-[40rem] bg-slate-100 flex'
                    modules={[Navigation, Pagination, Scrollbar]}
                    slidesPerView={1}
                    navigation
                    effect='slide'
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    
                    
                >
                    {
                        images.map(item => (
                            <SwiperSlide key={item.id} className='w-full p-3'>
                                <img src={item.address} className='h-full  rounded shadow ' alt="image slide" />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

        </motion.div>
    );
}

export default Slide;
