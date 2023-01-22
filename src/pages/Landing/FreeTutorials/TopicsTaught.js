import { useState } from 'react'
import { Container, Row, Col, Fade } from 'react-bootstrap'
import Clock from '../../../assets/images/FreeTutorial/yellowClock.png'
import Book from '../../../assets/images/FreeTutorial/topicBook.png'

const TopicsTaught = () => {

  const [show, setShow] = useState(false)
  const [open, setOpen] = useState(false)

  return (
    <Container className="my-4 TopicsTaught">
      <p className="fs-16 fw-700 text-black">مباحث تدریس شده</p>
      <hr className="my-2" />

      <Row className="d-lg-flex align-items-start">
        <Col className="position-relative" xs={12} lg={3}>
          <div className="">
            <p className="fs-16 fw-400 text-start text-black mx-4 my-2">هفته</p>
            <p className="fs-40 fw-500 text-start text-black mx-4 my-2">1</p>
          </div>
        </Col>
        <Col xs={12} lg={9}>
          <div className="d-flex align-items-center">
            <span className=" YellowClock d-flex justify-content-center align-items-center rounded-circle">
              <img src={Clock} alt="clock" />
            </span>
            <p className="mx-2 fs-16 fw-700 text-yellow">3 ساعت</p>
          </div>
          <p className='fs-18 fw-700 mt-4 mb-2 text-black'>آشنایی با دوره و مدرس</p>
          <p className="fs-12 fw-400 lh-md">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد
          </p>

          <div className="d-flex justify-content-between align-items-center w-100 my-4">
            <div className="d-flex align-items-center">
              <span className=" topicBook d-flex justify-content-center align-items-center rounded-circle">
                <img src={Book} alt="book" />
              </span>
              <p className="mx-2 fs-16 fw-700 text-black">۹ ویدیو، ۵ مقاله، ۳ آزمون</p>
            </div>
            <button onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open} className="border-0 bg-transparent text-primary">{show ? "مشاهده کمتر" : "مشاهده بیشتر"}</button>

          </div>
          <hr />
          <Fade timeout={500}  in={open}>
            <div className={open ? "h-auto" : "h-0"} id="example-fade-text" >


              <div className='my-2'>
                <div className="d-flex items-center">
                  <div style={{ width: "22px", height: "22px" }} className="rounded-circle border border-primary d-flex justify-content-center align-items-center">
                    <svg width="10" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.77552 5.22416C5.38698 6.72926 3.06569 8.18952 0.606716 9.73624C0.606716 8.68908 0.606716 7.80203 0.606716 6.91179C0.606716 5.05444 0.609919 3.20029 0.603516 1.34294C0.603516 0.936243 0.609915 0.718486 1.10939 1.03872C3.28341 2.43173 5.47984 3.78632 7.77552 5.22416Z" fill="#2E51DB" />
                    </svg>
                  </div>
                  <p className="fs-12 fw-500 mx-2 text-black">۹ ویدیو</p>
                </div>
                <div className="d-flex align-items-center my-2">
                  <p className="fs-10 text-black">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم   </p>
                  <p className="fs-10 fw-500 mx-2">۴ ساعت</p>
                </div>
                <div className="d-flex items-center my-2">
                  <p className="fs-10 text-black">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم   </p>
                  <p className="fs-10 fw-500 mx-2">۴ ساعت</p>
                </div>
              </div>


              <div className="my-4">
                <div className="d-flex align-items-center">
                  <div style={{ width: "22px", height: "22px" }} className="rounded-circle border border-primary d-flex justify-content-center align-items-center">
                    <img width="13" height="10" src={Book} alt="books" />
                  </div>
                  <p className="fs-12 fw-500 mx-2 text-black">۵ مقاله</p>
                </div>
                <div className="d-flex items-center my-2">
                  <p className="fs-10 text-black">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم   </p>
                  <p className="fs-10 fw-500 mx-2">۴ ساعت</p>
                </div>
              </div>

              <div className="my-4">
                <div className="d-flex align-items-center">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.0154 21.9988C5.05034 22.0885 0.0741004 17.1167 0.000732798 10.9948C-0.0694449 5.02027 4.90998 0.0516538 11.025 0.000397853C16.9774 -0.0508581 21.8898 4.8569 21.9983 10.966C22.1067 16.9245 17.1464 21.9091 11.0154 21.9988ZM10.9229 21.1242C16.5021 21.1114 21.0381 16.8027 21.1083 11.0909C21.1753 5.53924 16.8593 0.97426 11.1175 0.890969C5.50968 0.810882 1.00555 5.18685 0.874764 10.9339C0.753548 16.4119 5.2513 20.9737 10.9229 21.1242Z" fill="#2E51DB" />
                    <path d="M5.74273 10.9147C5.74273 8.92532 5.76187 6.93595 5.72997 4.94658C5.7204 4.4212 5.87671 4.28666 6.39028 4.29306C9.46534 4.31549 12.5436 4.31869 15.6186 4.29306C16.1482 4.28986 16.2726 4.44683 16.2694 4.95619C16.2502 8.98619 16.2471 13.0194 16.2694 17.0494C16.2726 17.5748 16.1227 17.7093 15.6091 17.7029C12.534 17.6805 9.45577 17.6773 6.38071 17.7029C5.85119 17.7061 5.7204 17.5523 5.72997 17.0398C5.75868 14.9991 5.74273 12.9585 5.74273 10.9147ZM6.69651 11.0044C6.69651 12.7279 6.71246 14.4513 6.68694 16.1748C6.68056 16.6329 6.82092 16.7515 7.2675 16.7483C9.75881 16.729 12.2533 16.7258 14.7446 16.7483C15.2072 16.7515 15.3156 16.6073 15.3124 16.1652C15.2965 12.7183 15.2933 9.27129 15.3124 5.82433C15.3156 5.36623 15.1784 5.24771 14.7319 5.25091C12.2405 5.27013 9.74605 5.27333 7.25474 5.25091C6.79221 5.24771 6.68056 5.39186 6.68375 5.83394C6.71246 7.55742 6.69651 9.2809 6.69651 11.0044Z" fill="#2E51DB" />
                    <path d="M11.9729 7.65359C12.579 7.65359 13.1883 7.6696 13.7943 7.64718C14.1676 7.63436 14.3621 7.68562 14.3653 8.14692C14.3685 8.64667 14.0942 8.61463 13.7656 8.61143C12.5503 8.60502 11.3349 8.59862 10.1196 8.61463C9.74637 8.62104 9.55179 8.57299 9.55179 8.11489C9.5486 7.61514 9.81974 7.64397 10.1515 7.65038C10.7576 7.65999 11.3668 7.65359 11.9729 7.65359Z" fill="#2E51DB" />
                    <path d="M12.0142 11.4786C11.3539 11.4786 10.6936 11.4529 10.0333 11.4882C9.6218 11.5074 9.55162 11.3344 9.558 10.9788C9.56119 10.6489 9.64413 10.5111 10.0014 10.5175C11.2965 10.5335 12.5884 10.5399 13.8835 10.5143C14.2918 10.5047 14.3492 10.6681 14.362 11.0237C14.3747 11.4433 14.1802 11.4946 13.8388 11.485C13.2296 11.4626 12.6203 11.4786 12.0142 11.4786Z" fill="#2E51DB" />
                    <path d="M11.9565 13.3911C12.5913 13.3911 13.2261 13.4103 13.8577 13.3846C14.2277 13.3686 14.3617 13.4807 14.3617 13.8684C14.3617 14.256 14.2309 14.3585 13.8608 14.3553C12.5945 14.3361 11.3249 14.3361 10.0585 14.3553C9.68846 14.3617 9.55448 14.2592 9.55767 13.8716C9.55767 13.484 9.68846 13.3718 10.0585 13.3878C10.6869 13.4103 11.3217 13.3911 11.9565 13.3911Z" fill="#2E51DB" />
                    <path d="M8.59743 8.15326C8.54959 8.42876 8.36138 8.57932 8.10938 8.58253C7.82548 8.58573 7.68193 8.35828 7.67874 8.10521C7.67555 7.8233 7.90204 7.67914 8.15404 7.67594C8.44113 7.67273 8.54321 7.90659 8.59743 8.15326Z" fill="#2E51DB" />
                    <path d="M8.10619 11.4657C7.82867 11.4209 7.67874 11.2318 7.67874 10.9756C7.67555 10.6905 7.90204 10.5495 8.15404 10.5463C8.43794 10.5431 8.58148 10.7705 8.58467 11.0204C8.59105 11.3087 8.35819 11.4112 8.10619 11.4657Z" fill="#2E51DB" />
                    <path d="M8.5976 13.8619C8.58484 14.1439 8.39983 14.288 8.14783 14.3169C7.85117 14.3521 7.714 14.1278 7.68529 13.8812C7.6502 13.5865 7.8735 13.4487 8.11912 13.4167C8.41578 13.3814 8.51786 13.6121 8.5976 13.8619Z" fill="#2E51DB" />
                  </svg>

                  <p className="fs-12 fw-500 mx-2 text-black">۳ آزمون</p>
                </div>
                <div className="d-flex items-center my-2">
                  <p className="fs-10 text-black">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم   </p>
                  <p className="fs-10 fw-500 mx-2">۴ ساعت</p>
                </div>
              </div>


            </div>
          </Fade>

        </Col>
      </Row>
    </Container>
  )
}

export default TopicsTaught