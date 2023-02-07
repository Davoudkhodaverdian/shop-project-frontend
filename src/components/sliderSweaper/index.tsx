import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import ImageData from './imageData.json';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const SliderSweaper = () => {

  //const swiper = useSwiper();
  return (
    <div>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{
          clickable: true
        }}
      >
        {ImageData.map(item => (
          <SwiperSlide key={item.id}>
            <section
              className="shadow-inner cursor-grab active:cursor-grabbing"
            >
              <div className=' flex flex-col items-center'>
                <div className='relative'>
                  <img src={`/images/slide/${item.image}`} alt={`${item.image}`} />

                  <div className=" absolute top-0 right-0 m-2  px-6 tracking-wide">
                    <h1 className="text-black text-sm  md:text-2xl bg-white rounded font-bold py-2 ">
                      فروشگاه محصولات دیجیتال
                    </h1>
                    <a
                      className="text-xs md:text-xl bg-black text-white px-2 rounded mt-1 md:mt-4 inline-block border-gray-600 leading-relaxed hover:bg-gray-200 hover:text-black"
                      href="#"
                    >
                      مشاهده محصولات
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>

        ))}
      </Swiper>
    </div>
  );
};

export default SliderSweaper;