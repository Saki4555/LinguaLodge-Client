import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Autoplay, Pagination, Navigation } from 'swiper';




import slide1 from '../../../assets/Home/slide1.png';
import slide2 from '../../../assets/Home/slide2.png';
import slide3 from '../../../assets/Home/slide3.png';

import HomeSlider from './HomeSlider';

const HomeBanner = () => {
    return (
        <>
            <div className='pt-16'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <HomeSlider img={slide1}></HomeSlider>
                    </SwiperSlide>
                    <SwiperSlide>
                        <HomeSlider img={slide2}></HomeSlider>
                    </SwiperSlide>
                    <SwiperSlide>
                        <HomeSlider img={slide3}></HomeSlider>
                    </SwiperSlide>

                </Swiper>
            </div>
        </>
    );
};

export default HomeBanner;