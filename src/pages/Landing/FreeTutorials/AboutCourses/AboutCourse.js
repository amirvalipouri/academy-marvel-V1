import { useState } from 'react'

import { Row, Col } from 'react-bootstrap'
import Free1 from '../../../../assets/images/FreeTutorial/free1.png'
import World from '../../../../assets/images/FreeTutorial/world.png'
import Clock from '../../../../assets/images/FreeTutorial/clock.png'
import Level from '../../../../assets/images/FreeTutorial/level.png'

const AboutCourse = () => {
    return (
        <div className="w-100">
            <Row>
                <Col className="d-flex justify-content-center align-items-center border p-2" xs={12} lg={3}>
                    <div className="d-flex  align-items-center">
                        <div className="border border-gray rounded-circle p-3 ">
                            <img width="24" height="24" src={Free1} alt="free" />
                        </div>
                        <div className="mx-2">
                            <p className="fs-14 fw-700 text-black">ددلاین انعطاف پذیر</p>
                            <p className="fs-10 fw-400 my-1">تایم مشخص برای اتمام دوره ندارید</p>
                        </div>
                    </div>
                </Col>
                <Col className="d-flex justify-content-center align-items-center border p-2" xs={12} lg={3}>
                    <div className="d-flex  align-items-center">
                        <div className="border border-gray rounded-circle p-3 ">
                            <img width="24" height="24" src={World} alt="world" />
                        </div>
                        <div className="mx-2">
                            <p className="fs-14 fw-700 text-black">۱۰۰٪ آنلاین</p>
                            <p className="fs-10 fw-400 my-1">کاملا به صورت آنلاین برگزار می‌شود</p>
                        </div>
                    </div>
                </Col>
                <Col className="d-flex justify-content-center align-items-center border p-2" xs={12} lg={3}>
                    <div className="d-flex  align-items-center">
                        <div className="border border-gray rounded-circle p-3 ">
                            <img width="24" height="24" src={Clock} alt="clock" />
                        </div>
                        <div className="mx-2">
                            <p className="fs-14 fw-700 text-black">۱۰۰ ساعت مدت دوره</p>
                            <p className="fs-10 fw-400 my-1">در ۱۰۰ ساعت آموزش کامل میبینید</p>
                        </div>
                    </div>
                </Col>
                <Col className="d-flex justify-content-center align-items-center border p-2" xs={12} lg={3}>
                    <div className="d-flex  align-items-center">
                        <div className="border border-gray rounded-circle p-3 ">
                            <img width="24" height="24" src={Level} alt="level" />
                        </div>
                        <div className="mx-2">
                            <p className="fs-14 fw-700 text-black">سطح مبتدی</p>
                            <p className="fs-10 fw-400 my-1">بدون نیاز به پیش نیاز شروع کنید</p>
                        </div>
                    </div>
                </Col>
            </Row>

            <div className="my-4">
                <p className="fs-16 fw-700 text-black">درباره دوره تریدینگ مقدماتی</p>
                <p className="fs-10 my-1 fw-500">۳۲۳,۹۷۵ نفر شرکت کرده‌اند</p>
                <p className="fs-12 lh-md text-black">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>
            </div>
        </div>
    )
}

export default AboutCourse