import {useRef , useState } from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Navigation } from 'swiper'

import { HiOutlineArrowSmRight, HiOutlineArrowSmLeft } from 'react-icons/hi'
import { Button } from '../../../components';

const ShippingTime = () => {

    const [ id , setId ] = useState("")
    const swiperRef = useRef();
    SwiperCore.use([Navigation])
    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)

    const sliderSettings = {
        300: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        680: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    };

    const fakeData = [
        {
            id: 1,
            day: "شنبه",
            week: "12 آذر",
            time: "9-12"
        },
        {
            id: 2,
            day: "دوشنبه",
            week: "25 آذر",
            time: "16-20"
        },
        {
            id: 3,
            day: "سه شنبه",
            week: "12 آذر",
            time: "9-12"
        },
    ]
    return (
        <div className="w-100  py-4 SHIPPINGTIME">
            <div className="d-flex justify-content-between align-items-center p-2">
                {/* <button style={{ width: "29px", height: "29px", borderRadius: "50%" }} className=" bg-primary text-white  mx-1 px-1" onClick={() => swiperRef.current?.slidePrev()}> <HiOutlineArrowSmRight /> </button> */}

                <Swiper
                    slidesPerView={3}
                    breakpoints={sliderSettings}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                    }}
                >

                    {fakeData.map((item, index) =>
                        <SwiperSlide key={item.id} className=" d-block d-md-flex justify-content-center align-items-center">
                            <Button className={`rounded-4 px-2 py-4 w-100  ${id == item.id ? "selectBtn" : "unselectBtn"} `} onClick={() => {setId(item.id)}}>
                                <div className="w-100 d-flex justify-content-start align-items-center py-1">
                                    <p className={`mx-2 fs-14 ${id == item.id ? "text-white" : ""}`}>{item.week}</p>
                                    <p className={`mx-2 fs-14 ${id == item.id ? "text-white" : ""}`}>{item.day}</p>
                                </div>
                                <p className={`mx-2 fs-14 text-start ${id == item.id ? "text-white" : ""}`}>
                                    <i className="bi bi-clock fs-20 ms-1 " />
                                    بازه {item.time}
                                </p>
                            </Button>
                        </SwiperSlide>
                    )}
                </Swiper>

                <button style={{ width: "29px", height: "29px", borderRadius: "50%" }} className=" bg-transport border border-primary text-primary px-1 mx-2" onClick={() => swiperRef.current?.slideNext()}><HiOutlineArrowSmLeft /></button>
            </div>
        </div>
    )
}

export default ShippingTime