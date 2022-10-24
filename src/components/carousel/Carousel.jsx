import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Image from "next/image";
import Box from "../atoms/box/Box";

function CarouselSlide() {
    return (
        <>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Box bg="black" height="350px"></Box>
                </SwiperSlide>
                <SwiperSlide><Box bg="black" height="350px"></Box></SwiperSlide>
                <SwiperSlide><Box bg="black" height="350px"></Box></SwiperSlide>
            </Swiper>
        </>
    );
}

export default CarouselSlide;