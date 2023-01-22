import React from 'react'

import { Col, Row, Container } from 'react-bootstrap'
import { PopularClassCard } from '../../../../components/NewVersion'
import { NavLink } from 'react-router-dom'

const PopularClass = () => {

    const fakeData = [
        {
            _id: "/blog/62e97ad95b039ee91f55c4c6",
            title: "django",
            src: "https://picsum.photos/id/237/200/300"
        },
        {
            _id: "/blog/62e97ad95b039ee91f55c4c6",
            title: "js",
            src: "https://picsum.photos/id/237/200/300"
        },
        {
            _id: "/blog/62e97ad95b039ee91f55c4c6",
            title: "python",
            src: "https://picsum.photos/id/237/200/300"
        },
        {
            _id: "/blog/62e97ad95b039ee91f55c4c6",
            title: "django",
            src: "https://picsum.photos/id/237/200/300"
        },
        {
            _id: "/blog/62e97ad95b039ee91f55c4c6",
            title: "js",
            src: "https://picsum.photos/id/237/200/300"
        },
        {
            _id: "/blog/62e97ad95b039ee91f55c4c6",
            title: "python",
            src: "https://picsum.photos/id/237/200/300"
        },
    ]
    return (
        <Container className="land-PopularClass">
            <p className="text-center fw-700 fs-18 lh-md text-white mb-4">پرطرفدارترین کلاس های آموزشی</p>
            <Row className="w-100 d-flex justify-content-center align-items-center py-4 px-2">
                {fakeData.map((item, index) =>
                    <Col xs={11} sm={11} md={6} lg={4} xl={4} >
                        <PopularClassCard {...item} />
                    </Col>
                )}
            </Row>
            <p className="text-center fw-400 fs-16 lh-md text-white my-4 p-2">اشتراکی که تهیه می‌کنید برای تماشای<br/>
                بیش از ۷۵۰ دوره آموزشی است که مسیر زندگی شما را تغییر میدهد
            </p>

            <div className="w-100 d-flex justify-content-center align-items-center my-4 p-4">
                <NavLink to='/' className="btn btn-primary Button font-sans fs-12 py-2 fw-500 mx-auto">
                خرید اشتراک و شروع یادگیری
                </NavLink>
            </div>
        </Container>
    )
}

export default PopularClass