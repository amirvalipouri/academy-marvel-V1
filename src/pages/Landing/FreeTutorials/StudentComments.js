import { useRef } from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Navigation} from 'swiper'
import CardFreeTutorial from '../../../components/NewVersion/CardFreeTutorial';

import { HiOutlineArrowSmRight, HiOutlineArrowSmLeft } from 'react-icons/hi'


const StudentComments = () => {

  const fakeData = [
    {
      id: 0,
      content: "شمثهقع شنترشک4صثهحقخفلع  نیبهله 4 یبمکنل 5ف5  بمالنقحفا مهثقفل  خقغ  یسحققخلاه سبذ سثق5فحخ  یقن ش",
      name: "امیر آقایی",
      job: "مدیر محصول اسنپ",
      src: "https://picsum.photos/id/237/200/300"
    },
    {
      id: 1,
      content: "شمثهقع شنترشک4صثهحقخفلع  نیبهله 4 یبمکنل 5ف5  بمالنقحفا مهثقفل  خقغ  یسحققخلاه سبذ سثق5فحخ  یقن ش",
      name: "امیر آقایی",
      job: "مدیر محصول اسنپ",
      src: "https://picsum.photos/id/237/200/300"
    },
    {
      id: 2,
      content: "شمثهقع شنترشک4صثهحقخفلع  نیبهله 4 یبمکنل 5ف5  بمالنقحفا مهثقفل  خقغ  یسحققخلاه سبذ سثق5فحخ  یقن ش",
      name: "امیر آقایی",
      job: "مدیر محصول اسنپ",
      src: "https://picsum.photos/id/237/200/300"
    },
    {
      id: 3,
      content: "شمثهقع شنترشک4صثهحقخفلع  نیبهله 4 یبمکنل 5ف5  بمالنقحفا مهثقفل  خقغ  یسحققخلاه سبذ سثق5فحخ  یقن ش",
      name: "امیر آقایی",
      job: "مدیر محصول اسنپ",
      src: "https://picsum.photos/id/237/200/300"
    },
    {
      id: 4,
      content: "شمثهقع شنترشک4صثهحقخفلع  نیبهله 4 یبمکنل 5ف5  بمالنقحفا مهثقفل  خقغ  یسحققخلاه سبذ سثق5فحخ  یقن ش",
      name: "امیر آقایی",
      job: "مدیر محصول اسنپ",
      src: "https://picsum.photos/id/237/200/300"
    },
    {
      id: 5,
      content: "شمثهقع شنترشک4صثهحقخفلع  نیبهله 4 یبمکنل 5ف5  بمالنقحفا مهثقفل  خقغ  یسحققخلاه سبذ سثق5فحخ  یقن ش",
      name: "امیر آقایی",
      job: "مدیر محصول اسنپ",
      src: "https://picsum.photos/id/237/200/300"
    },
  ]

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

  return (
    <div className="w-100 bg-light p-4">
      <div className="d-flex justify-content-between align-items-center p-2">
        <button style={{width : "29px" , height : "29px" , borderRadius : "50%"}} className=" bg-primary text-white  mx-1 px-1" onClick={() => swiperRef.current?.slidePrev()}> <HiOutlineArrowSmRight /> </button>

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

          {fakeData.map((item , index) => 
             <SwiperSlide className=" d-block d-md-flex justify-content-center align-items-center">
                <CardFreeTutorial {...item} />
           </SwiperSlide>
          )}
         
          {/* <SwiperSlide>
            Slide 2
          </SwiperSlide>
          <SwiperSlide>
            Slide 3
          </SwiperSlide>
          <SwiperSlide>
            Slide 4
          </SwiperSlide>
          <SwiperSlide>
            Slide 5
          </SwiperSlide> */}
        </Swiper>

        <button  style={{width : "29px" , height : "29px" , borderRadius : "50%"}} className=" bg-primary text-white px-1 mx-1" onClick={() => swiperRef.current?.slideNext()}><HiOutlineArrowSmLeft /></button>
      </div>
    </div>
  )
}

export default StudentComments