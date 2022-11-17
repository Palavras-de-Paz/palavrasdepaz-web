import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";
import Box from "../atoms/box/Box";
import Image from "next/image";
import image_6 from "../../../public/static/images/swiper/image 6.svg"
import image_4 from "../../../public/static/images/swiper/image 4.svg"
import image_11 from "../../../public/static/images/swiper/image 11.svg"
import image_12 from "../../../public/static/images/swiper/image 12.svg"
import image_14 from "../../../public/static/images/swiper/image 14.svg"
import image_15 from "../../../public/static/images/swiper/image 15.svg"
import image_16 from "../../../public/static/images/swiper/image 16.svg"
import image_17 from "../../../public/static/images/swiper/image 17.svg"
import image_18 from "../../../public/static/images/swiper/image 18.svg"
import image_19 from "../../../public/static/images/swiper/image 19.svg"


export default function SwiperJs() {
    const [swiperRef, setSwiperRef] = useState(null);


    return (
        <Box padding="10px 10px">
            <Swiper
            style={{justifyContent: 'center'}}
                spaceBetween={1}
                centeredSlides={true}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                loop={true}
                breakpoints={{
                    300: {
                        width: 300,
                        slidesPerView: 1,
                        spaceBetween: 1,
                    },
                }}
            >

                <SwiperSlide>

                    <Image width={200} height={200} className="swiperImg" src={image_6} alt="" />

                </SwiperSlide>

                <SwiperSlide>

                    <Image width={200} height={200} className="swiperImg" src={image_4} alt="" />

                </SwiperSlide>
                <SwiperSlide>

                    <Image width={200} height={200} className="swiperImg" src={image_11} alt="" />

                </SwiperSlide>
                <SwiperSlide>

                    <Image width={200} height={200} className="swiperImg" src={image_12} alt="" />

                </SwiperSlide>
                <SwiperSlide>

                    <Image width={200} height={200} className="swiperImg" src={image_14} alt="" />

                </SwiperSlide>
                <SwiperSlide>

                    <Image width={200} height={200} className="swiperImg" src={image_15} alt="" />

                </SwiperSlide>
                <SwiperSlide>

                    <Image width={200} height={200} className="swiperImg" src={image_16} alt="" />

                </SwiperSlide>
                <SwiperSlide>

                    <Image width={200} height={200} className="swiperImg" src={image_17} alt="" />

                </SwiperSlide>
                <SwiperSlide>

                    <Image width={200} height={200} className="swiperImg" src={image_18} alt="" />

                </SwiperSlide>
                <SwiperSlide>

                    <Image width={200} height={200} className="swiperImg" src={image_19} alt="" />

                </SwiperSlide>
            </Swiper>

        </Box>
    );
}