import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css/bundle';
import 'swiper/css/autoplay';

export default () => {

  //const swiper = useSwiper();
  return (
    <div>
      <div>
        <div>
          {/* <button onClick={() => swiper.slideNext()}>Slide to the next slide</button> */}
        </div>
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          // autoplay={{ delay: 3000 }}
          // navigation

        >
          {[1, 2, 3].map(item => (
            <SwiperSlide key={item}>
              <section
                className="w-full mx-auto flex pt-12 md:pt-0 md:items-center bg-cover bg-right shadow-inner"
                style={{
                  maxWidth: "1600px",
                  height: "32rem",
                  backgroundImage: 'url("/images/slide/open-chair-slide1.jpeg")',
                }}
              >
                <div className="container mx-auto">
                  <div className="flex flex-col w-full lg:w-1/2 justify-center items-start  px-6 tracking-wide">
                    <h1 className="text-black text-2xl bg-white rounded font-bold py-2 px-4">
                      {item} فروشگاه محصولات دیجیتال
                    </h1>
                    <a
                      className="text-xl bg-black text-white px-2 rounded mt-4 inline-block border-gray-600 leading-relaxed hover:bg-gray-200 hover:text-black"
                      href="#"
                    >
                      مشاهده محصولات
                    </a>
                  </div>
                </div>
              </section>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

    </div>
  );
};