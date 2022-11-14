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
import USP from "../../../public/static/images/USP.png"
import OLHO from "../../../public/static/images/OLHO.png"
import BIBLIASPA from "../../../public/static/images/BIBLIASPA.png"
import SALESFORCE from "../../../public/static/images/SALESFORCE.png"
import FUNAP from "../../../public/static/images/FUNAP.png"
import OPENTEXT from "../../../public/static/images/OPENTEXT.png"

export default function SwiperJs() {
    const [swiperRef, setSwiperRef] = useState(null);


    return (
        <Box margin="64px" >
            <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={5}
                spaceBetween={1}
                centeredSlides={false}
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
                    <Box radius="50%">
                        <Image src={USP} alt="" />
                    </Box>
                </SwiperSlide>

                <SwiperSlide>
                    <Box radius="50%">
                        <Image src={OLHO} alt="" />
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box radius="50%">
                        <Image src={BIBLIASPA} alt="" />
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box radius="50%">
                        <Image src={SALESFORCE} alt="" />
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box radius="50%">
                        <Image src={FUNAP} alt="" />
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box radius="50%">
                        <Image src={FUNAP} alt="" />
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box radius="50%">
                        <Image src={FUNAP} alt="" />
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box radius="50%">
                        <Image src={FUNAP} alt="" />
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box radius="50%">
                        <Image src={FUNAP} alt="" />
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box radius="50%">
                        <Image src={FUNAP} alt="" />
                    </Box>
                </SwiperSlide>
            </Swiper>

        </Box>
    );
}