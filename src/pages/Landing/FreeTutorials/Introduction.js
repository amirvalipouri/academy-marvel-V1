import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { Modal } from '../../../components'
import Star from '../../../assets/images/FreeTutorial/star.png'
import whiteStar from '../../../assets/images/FreeTutorial/whiteStar.png'
import Teacher from '../../../assets/images/FreeTutorial/teacher.png'
import Laptop from '../../../assets/images/FreeTutorial/laptop.png'
import Monitorplay from '../../../assets/images/FreeTutorial/monitorplay.png'
import SubscriptionInfo from '../../../components/NewVersion/SubscriptionInfo'
const Introduction = () => {
    const [show, setShow] = useState(false)
    const [period, setPeriod] = useState("month")
    const [ checked , setChecked ] = useState(false)

    const fakeData = [
        {
            id: 0,
            title: "اشتراک ویژه",
            price: 345000,
            des: ["دسترسی سریع و آسان", "آفرهای ویژه " ,"پشتیبانی 24 ساعته" ,"پشتیبانی 24 ساعته" , "رفع اشکال توسط استادان خبره"] ,
            checked: true
        },
        {
            id: 1,
            title: "اشتراک وی آی پی",
            price: 450000,
            des: ["دسترسی سریع و آسان", "آفرهای ویژه " ,"پشتیبانی 24 ساعته" ,"پشتیبانی 24 ساعته" , "رفع اشکال توسط استادان خبره"] ,
            checked: false
        },
        {
            id: 2,
            title: "اشتراک وی آی پی",
            price: 450000,
            des: ["دسترسی سریع و آسان", "آفرهای ویژه " ,"پشتیبانی 24 ساعته" ,"پشتیبانی 24 ساعته" , "رفع اشکال توسط استادان خبره"] ,
            checked: false
        },
    ]
    return (
        <div className="Introduction-video d-flex justify-content-center align-items-center">
            <Modal
                show={show}
                onHide={setShow}
                variant="white"
                title="اشتراک های ما"
                closeBtn
                size='xl'
            >
                <p className="p-1 fs-24 fw-700 text-primary my-2">سرویس های مورد نظر خود را انتخاب کنید</p>

                <Button onClick={() => setPeriod("month")} variant={period == "month" ? "primary" : "white"} className={period == "month" ? "py-2 px-4 text-white shadow my-2" : "py-1 px-4 text-primary shadow my-2"}>ماهانه </Button>
                <Button onClick={() => setPeriod("year")} variant={period == "year" ? "primary" : "white"} className={period == "year" ? "py-2 px-4 text-white shadow my-2" : "py-1 px-4 text-primary shadow my-2"}>سالانه </Button>

                <Row>
                    {[fakeData.map((item, index) =>
                        <Col xs={12} sm={12} md={6} lg={4}>
                            <SubscriptionInfo {...item}  />
                        </Col>
                    )]}
                </Row>


            </Modal>
            <Container className='py-4' >

                <Row>
                    <p className="mt-3">asdfa</p>
                    <Col xs={12} lg={7}>
                        <p className="fs-25 fw-700 text-white my-2 lh-md">دوره تریدینگ مقدماتی</p>
                        <div><span className="fs-15 fw-700 text-white">1200</span> <span className="fs-12 fw-500 text-white">نفر شرکت کرده اند</span></div>
                        <p className="fs-14 fw-300 text-white lh-md my-2">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
                        </p>
                        <div>
                            {[1, 2, 3, 4].map((i) =>
                                <img src={Star} alt="star" />
                            )}
                            <img src={whiteStar} alt="star" />

                        </div>
                        <p style={{ color: "#EEBD67" }} className='fs-10 my-2'>۵۴۳ نفر نظر داده‌اند</p>
                        <div className="d-flex align-items-center mt-4">
                            <img alt='teacher' src={Teacher} className="rounded-circle " width="59" height="59" />
                            <div className="mx-3">
                                <p className="text-white fs-14 fw-700">امیر آقایی</p>
                                <p className="text-white fs-10 fw-500">مدیر محصول اسنپ</p>
                            </div>
                        </div>
                    </Col>
                    <Col className="d-flex flex-column justify-content-center align-items-center" xs={12} lg={5}>
                        <div className="course-img my-3">
                            <div className="free-mark d-flex justify-content-center align-items-center"><p className="text-white fs-18 fw-700 ">دوره رایگان</p></div>
                            <img src={Laptop} alt="laptop" />
                        </div>
                        <Button onClick={() => setShow(true)} variant="white" className="  text-primary font-sans fs-12 px-4 py-2 fw-700"><span className="mx-1"><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.9375 15.75L17.0625 15.75C17.7874 15.75 18.375 15.1624 18.375 14.4375V5.25C18.375 4.52513 17.7874 3.9375 17.0625 3.9375L3.9375 3.9375C3.21263 3.9375 2.625 4.52513 2.625 5.25L2.625 14.4375C2.625 15.1624 3.21263 15.75 3.9375 15.75Z" stroke="#2E51DB" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M13.125 18.375H7.875" stroke="#2E51DB" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M13.125 9.84375L9.1875 7.21875V12.4688L13.125 9.84375Z" stroke="#2E51DB" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        </span> شرکت در دوره</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Introduction