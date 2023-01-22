import React from 'react'

import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import NewTopicCard from '../../../../components/NewVersion/NewTopicCard';

const NewTopic = () => {
  const fakeData = [
    {
      id : 1 , 
      name : "آموزش پایتون",
      lessons : "345 درس آنلاین",
      img : "https://picsum.photos/id/235/200/300",
      teacher : "https://picsum.photos/id/235/200/300"

    },
    {
      id : 2 , 
      name : "آموزش پایتون",
      lessons : "345 درس آنلاین",
      img : "https://picsum.photos/id/237/200/300",
      teacher : "https://picsum.photos/id/237/200/300"

    },
    {
      id : 3 , 
      name : "آموزش پایتون",
      lessons : "345 درس آنلاین",
      img : "https://picsum.photos/id/230/200/300",
      teacher : "https://picsum.photos/id/230/200/300"

    },
    {
      id : 4 , 
      name : "آموزش پایتون",
      lessons : "345 درس آنلاین",
      img : "https://picsum.photos/id/231/200/300",
      teacher : "https://picsum.photos/id/231/200/300"

    },
  ]
  return (
    <Container className="land-newTopic w-100 my-4">
        <p className="text-white fs-18 fw-700 my-4">دوره‌های جدید در مارول</p>
        <Swiper
          loop
          modules={[Autoplay]}
          className="w-100"
          spaceBetween={50}
          initialSlide={1}
          breakpoints={{
            1200: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
          autoplay={{
            delay: 3500,
          }}
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
        >
          {fakeData.map((item, index) => (
            <SwiperSlide key={index} className="h-auto d-flex justify-content-center">
              <NewTopicCard  {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
    </Container>
  )
}

export default NewTopic