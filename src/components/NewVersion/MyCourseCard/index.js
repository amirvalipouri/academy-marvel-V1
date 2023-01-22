import { useState } from 'react'


import './index.scss'
import { Row, Col, ProgressBar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Book from '../../../assets/images/FreeTutorial/topicBook.png'


const MyCourseCard = ({

    item = {}
}) => {

    return (
        <div className="MyCourseCard w-100 bg-white rounded-4 py-3 px-1  my-4 shadow-sm">
            <Row className="d-flex justify-content-start align-items-center">
                <Col className="d-flex justify-content-center align-items-center" xs="12" lg="8">
                    <div className="row d-flex justify-content-center align-items-center w-100">
                        <div className="col-12 col-lg-4  MyCourseCard-img ">
                            <img className="w-100 h-100 object-fit-cover rounded-4" src={item.img} />
                        </div>
                        <div className="col-12 col-lg-8">
                            <div className="d-flex align-items-center my-1 ">
                                <img className="rounded-circle" width="33" height="33" src={item.teacherImg} />
                                <p className="fs-10 fw-400 text-black mx-2">{item.name}</p>
                            </div>
                            <p className="fs-12 fw-700 text-black mb-1 " >{item.title}</p>
                            <p className="fs-10 fw-400 mb-1" >{item.courses}</p>
                            <div className="w-100 d-flex align-items-center">

                                <div className="w-80">
                                    {item.rate == 100 && <ProgressBar style={{ borderRadius: "20px" }} variant="success" now={item.rate} />}
                                    {(item.rate > 40 && item.rate < 100) && <ProgressBar style={{ borderRadius: "20px" }} variant="warning" now={item.rate} />}
                                    {item.rate < 40 && <ProgressBar style={{ borderRadius: "20px" }} variant="danger" now={item.rate} />}
                                </div>
                                {item.rate == 100 && <p className="mx-1 text-success"> % {item.rate}</p>}
                                {(item.rate > 40 && item.rate < 100) && <p className="mx-1 text-warning "> % {item.rate}</p>}
                                {item.rate < 40 && <p className="mx-1 text-danger"> % {item.rate}</p>}

                            </div>
                        </div>
                    </div>
                </Col>

                <span className="MyCourseCard-divider d-none d-lg-block"></span>

                <Col xs="12" lg="3">
                    {item.level == "finished" &&
                        <div>
                            <p className="fs-14 fw-500 text-black mb-1">کارنامه</p>
                            <div className="w-100 rounded-4 MyCourseCard-finished  p-2">
                                <div className="w-100 d-flex justify-content-between align-items-center">
                                    <p className="fs-12 fw-500 my-1 text-success">نمره نهایی:</p>
                                    <p className="fs-12 fw-500 text-black" >{item.rate}</p>

                                </div>
                                <div className="w-100 d-flex justify-content-between align-items-center">
                                    <p className="fs-12 fw-500 my-1 text-success">مدت دوره:</p>
                                    <p className="fs-12 fw-500 text-black" >{item.rate}</p>
                                </div>
                            </div>
                        </div>
                    }

                    {item.level == "current" &&
                        <div className="w-100">
                            <p className="fs-14 fw-500 text-black mb-1">درس بعدی</p>
                            <Link to="/" className="w-100 rounded-4 MyCourseCard-current d-flex justify-content-between align-items-center  p-2">
                                <div className="d-flex align-items-center">
                                    <div style={{width : "22px" , height : "22px"}} className="rounded-circle border border-primary d-flex flex-center">
                                        <img src={Book}  width="13" height="10" />
                                    </div>
                                    <div className="mx-1">
                                        <p className="fs-12 fw-500 text-black">لور ایپبانیس</p>
                                        <p className="fs-12 fw-500">۲ ساعت</p>
                                    </div>
                                </div>
                                <div>
                                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.6562 3.375L2.53125 13.5L12.6562 23.625V18.5625H16.0312V8.4375H12.6562V3.375Z" stroke="#2E51DB" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M22.7812 18.5625V8.4375" stroke="#2E51DB" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M19.4062 18.5625V8.4375" stroke="#2E51DB" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                </div>
                            </Link>
                        </div>
                    }
                </Col>
            </Row>
        </div>
    )
}

export default MyCourseCard