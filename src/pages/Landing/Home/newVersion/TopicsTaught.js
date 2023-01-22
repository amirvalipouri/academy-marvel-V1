import React from 'react'
import { Container , Row , Col } from "react-bootstrap"
import { TopicTaughtCard } from '../../../../components/NewVersion'

const TopicsTaught = () => {
    const fakeData = [
        {
            id : 1,
            title : "آمورش زبان",
            number : "345 دوره",
            src: "https://picsum.photos/id/237/200/300"
        },
        {
            id : 2,
            title : "آمورش زبان",
            number : "345 دوره",
            src: "https://picsum.photos/id/237/200/300"
        },
        {
            id : 3,
            title : "آمورش زبان",
            number : "345 دوره",
            src: "https://picsum.photos/id/237/200/300"
        },
        {
            id : 4,
            title : "آمورش زبان",
            number : "345 دوره",
            src: "https://picsum.photos/id/237/200/300"
        },
        {
            id : 5,
            title : "آمورش زبان",
            number : "345 دوره",
            src: "https://picsum.photos/id/237/200/300"
        },
        {
            id : 6,
            title : "آمورش زبان",
            number : "345 دوره",
            src: "https://picsum.photos/id/237/200/300"
        },
        {
            id : 7,
            title : "آمورش زبان",
            number : "345 دوره",
            src: "https://picsum.photos/id/237/200/300"
        },
        {
            id : 8,
            title : "آمورش زبان",
            number : "345 دوره",
            src: "https://picsum.photos/id/237/200/300"
        },
        {
            id : 9,
            title : "آمورش زبان",
            number : "345 دوره",
            src: "https://picsum.photos/id/237/200/300"
        },
        {
            id : 10,
            title : "آمورش زبان",
            number : "345 دوره",
            src: "https://picsum.photos/id/237/200/300"
        },
    ]
  return (
    <Container className="TopicsTaught p-2 w-100 my-4">
        <p className="fs-18 fw-700 text-white m-3 lh-lg">مباحث تدریس شده در مارول</p>
        <Row className="d-flex justify-content-start align-items-center p-2 w-100">
            {fakeData.map((item , index)=>
                <Col xs={12} sm={12} md={6} lg={3} xl={3} key={item.id}>
                    <TopicTaughtCard {...item} />
                </Col>
            )}
        </Row>
    </Container>
  )
}

export default TopicsTaught