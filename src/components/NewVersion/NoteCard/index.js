import React from 'react'
import { Col, Row, Button } from 'react-bootstrap'

import { AiOutlineDelete } from 'react-icons/ai'

import './index.scss'

const NoteCard = ({
    onShow = ()=>{},
    text = "",
    img = "",
    title = "",
    date
}) => {
    return (
        <div className="NOTECARD my-2 bg-white rounded-4 py-3 px-2 shadow">
            <Row className="w-100">
                <Col className="d-flex flex-column align-items-start" xs="12" md="4" lg="3">
                    <img className="NOTECARD-img" src={img} alt={title} />
                    <div>
                        <p className="fs-14 fw-400 text-black my-1">{title}</p>
                        <p className="fs-10 fw-400 my-1">{date}</p>
                    </div>
                </Col>
                <Col className="d-flex flex-column align-items-start justify-content-around" xs="12" md="8" lg="9">
                    <div className="NOTECARD-text">
                        <p className="fs-10 fw-400 text-black">{text}</p>
                    </div>
                    
                    <div>
                        <Button onClick={()=>onShow(true)} className="bg-transparent text-primary border-0 fs-10 fw-700">
                            <span className="mx-1"><svg width="15" height="15" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3327 15.6667V9.83342H15.666V15.6667H2.33268V2.33341H8.16602V0.666748H2.33268C1.41221 0.666748 0.666016 1.41294 0.666016 2.33341V15.6667C0.666016 16.5872 1.41221 17.3334 2.33268 17.3334H15.666C16.5865 17.3334 17.3327 16.5872 17.3327 15.6667ZM14.9811 1.2696C14.5991 0.884598 14.0761 0.666748 13.5305 0.666748C12.9855 0.666748 12.463 0.884106 12.0788 1.2706L5.10476 8.2446C4.48157 8.79369 4.07305 9.61078 4.00206 10.4895L3.99935 13.1687V14.002H7.44485C8.3901 13.9372 9.2152 13.5247 9.79727 12.8532L16.7319 5.92161C17.1166 5.53688 17.3327 5.01507 17.3327 4.47098C17.3327 3.92689 17.1166 3.40508 16.7319 3.02035L14.9811 1.2696ZM7.386 12.3374C7.83119 12.3059 8.24559 12.0987 8.57834 11.7181L13.6299 6.66652L11.3347 4.37114L6.2461 9.45807C5.90847 9.75668 5.69961 10.1744 5.66602 10.5566V12.3359L7.386 12.3374ZM12.5134 3.19282L14.8084 5.48801L15.5533 4.7431C15.6255 4.67093 15.6661 4.57305 15.6661 4.47098C15.6661 4.36892 15.6255 4.27103 15.5533 4.19886L13.8003 2.4458C13.7289 2.37387 13.6318 2.33341 13.5305 2.33341C13.4292 2.33341 13.332 2.37387 13.2607 2.4458L12.5134 3.19282Z" fill="#2E51DB" />
                        </svg>
                        </span>
                        ایجاد تغییر
                        </Button>
                        <Button className="bg-transparent text-primary border-0 fs-10 fw-700"><span className="mx-1"><AiOutlineDelete  color="primary" size="15px" /></span> حذف کردن </Button>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default NoteCard