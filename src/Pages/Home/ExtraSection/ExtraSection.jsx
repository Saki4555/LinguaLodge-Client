
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";
import useStudentFeedbacks from "../../../Hooks/useStudentFeedbacks";
import LazyLoad from "react-lazy-load";


const ExtraSection = () => {

    const [feedbacks] = useStudentFeedbacks();
    console.log(feedbacks);

    return (
        <>
            <div className="font-kanit mt-14 mb-14">
                <h2 className="text-4xl text-center">Our Happy Students</h2>
            </div>
            <div className="mb-16">
                <Swiper
                    // slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                    breakpoints={{
                        // when window width is <= 640px (mobile devices)
                        640: {
                          slidesPerView: 1,
                        },
                        992: {
                            slidesPerView: 3
                        }
                      }}
                >

                    {
                        feedbacks.map(item => <SwiperSlide
                            key={item._id}
                        >
                            <div>
                                <div className="w-96 h-96 border shadow-2xl mb-10 font-kanit">
                                    <div>
                                        <h2 className="uppercase font-semibold text-[#4ab3ac] px-10 mt-5">{item.title}</h2>
                                        <p className="px-10 pt-5 text-sm">{item.feedback}</p>

                                    </div>
                                    <div className="flex items-center mt-2">
                                        <LazyLoad>
                                            <img src={item.imageName} alt="" />
                                        </LazyLoad>
                                        <div className="bg-[#4ab3ac] pl-3 py-3 pr-14">
                                            <h5 className="text-white">Emily Wilson</h5>
                                            <p className="text-white">{item.profession}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </>
    );
};

export default ExtraSection;