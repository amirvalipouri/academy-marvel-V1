import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import Book from '../../../../assets/images/FreeTutorial/notebook.png'
import Ruler from '../../../../assets/images/FreeTutorial/ruler.png'
import Pen from '../../../../assets/images/FreeTutorial/pen.png'
import Mess from '../../../../assets/images/FreeTutorial/mess.png'
import Color from '../../../../assets/images/FreeTutorial/colors.png'
import Aboutteacher from '../../../../assets/images/FreeTutorial/aboutTeacher.png'

const AboutTeacher = () => {
  return (
    <Container className="AboutTeacher" >
      <hr className="my-2" />
      <Row>
        <Col xs={12} lg={6}>
          <p className="fs-16 fw-700 text-black">درباره مدرس</p>
          <div className="d-flex align-items-center mt-4">
            <img alt='teacher' src="" className="rounded-circle " width="59" height="59" />
            <div className="mx-3">
              <p className="text-black fs-25 fw-700">امیر ولی پوری</p>
            </div>
          </div>
          <p className="fs-12 fw-400 text-black lh-md">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادزیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          </p>
        </Col>
        <Col className="position-relative AboutTeacher-picture py-4 d-flex justify-content-center" xs={12} lg={6}>
          <img className="book1 d-none d-lg-block" src={Book} alt="noteBook" />
          <img className="book2 d-none d-lg-block" src={Book} alt="noteBook" />
          <img className="Ruler1 d-none d-lg-block" src={Ruler} alt="noteBook" />
          <img className="Ruler2 d-none d-lg-block" src={Ruler} alt="noteBook" />
          <img className="Pen1 d-none d-lg-block" src={Pen} alt="noteBook" />
          <img className="Pen2 d-none d-lg-block" src={Pen} alt="noteBook" />
          <img className="Mess1 d-none d-lg-block" src={Mess} alt="Mess" />
          <img className="Mess2 d-none d-lg-block" src={Mess} alt="Mess" />
          <img className="Color d-none d-lg-block" src={Color} alt="color" />
          <img className='aboutTeacherLaptop' src={Aboutteacher}  />
        </Col>
      </Row>
    </Container>
  )
}

export default AboutTeacher