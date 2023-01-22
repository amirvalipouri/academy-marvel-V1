import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Input } from '../../../components'

const Note = () => {
  const fakeData = [
    {
      id: 0,
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است",
      date: "ثانیه 25"
    },
    {
      id: 1,
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است",
      date: "ثانیه 35"
    },
    {
      id: 2,
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است",
      date: "40"
    },
    {
      id: 3,
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است",
      date: "ثانیه 50"
    },
    {
      id: 4,
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است",
      date: "40"
    },
    {
      id: 5,
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است",
      date: "ثانیه 50"
    },
  ]
  return (
    <div className="NOTE">
      <Row className="d-flex align-items-start">
        <Col xs="12" lg="6">
          <div className="border w-100 rounded-10px py-2 shadow">
            <p className="fs-14 fw-700 text-black mx-2">یادداشت جدید</p>
            <hr />
            <textarea rows="10" cols="20" className='bg-transparent border-0 w-100 p-2'></textarea>
            <div className="w-100 d-flex justify-content-end">
              <button className="btn border border-primary rounded-circle d-flex justify-content-center align-items-center p-1 mx-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.93917 12.6464L7.69193 11.8973L7.69192 11.8973L7.69192 11.8973C5.33871 11.1129 4.16211 10.7207 4.16211 9.99997C4.16211 9.27921 5.33872 8.88701 7.69193 8.10261L16.2051 5.26488C17.8609 4.71295 18.6888 4.43699 19.1258 4.87401C19.5628 5.31102 19.2869 6.13892 18.7349 7.79471L15.8972 16.3079L15.8972 16.3079L15.8972 16.3079C15.1128 18.6611 14.7206 19.8377 13.9998 19.8377C13.2791 19.8377 12.8869 18.6611 12.1025 16.3079L11.3534 14.0606L15.7069 9.70708C16.0975 9.31656 16.0975 8.68339 15.7069 8.29287C15.3164 7.90234 14.6832 7.90234 14.2927 8.29287L9.93917 12.6464Z" fill="#2E51DB" />
                </svg>
              </button>
            </div>
          </div>
        </Col>
        <Col className="writtenNote py-2" xs="12" lg="6">
          {fakeData.map((item, index) =>
            <div key={item.id} className="my-2 rounded-10px bg-white shadow border-0 py-2">
              <p className="mx-2 my-3">{item.text}</p>
              <hr />
              <p className="mx-2 text-end">{item.date}</p>
            </div>
          )}
        </Col>
      </Row>
    </div>
  )
}

export default Note