import { useState } from 'react'
 
import { Accordion , Col, Container, Row } from "react-bootstrap";
import { ServiceCard } from "../../../components";
import { services, questions } from "../../../constants";
import { Link } from "react-router-dom";
import MarvelLogo from '../../../assets/images/Home/marvelLogo.png'
// import Accordion from "../../../components/NewVersion/Accordion";

export default function Services() {
  const [ show , setShow ] = useState(false)

  return (
    <Container className="Services d-flex flex-column flex-center text-center row-gap-4 position-relative my-2">
      <div className="services-logo">
        <img src={MarvelLogo} alt="marvel-logo" />
      </div>
      
      {/* <h4 className="text-info">ما حرفه‌ای این زمینه هستیم</h4>
      <p className="white-space-pre-wrap lh-md">
        مهم نیست که دنبال چه چیزی هستید، ما میتوانیم قابل اعتمادترین
        {"\n"} روش‌های کسب درآمد را به شما آموزش دهیم
      </p>
      <Row>
        {services.map((item, index) => (
          <Col key={index} xs="9" sm="6" lg="3">
            <ServiceCard {...item} />
          </Col>
        ))}
      </Row> */}
      <Row className="align-items-start mt-4">
        <Col
          xs="12"
          lg="6"
          className="d-flex flex-column align-items-start row-gap-3"
        >
          <p className="text-primary fs-14 fw-700">خدمات ما</p>
          <h4 className="text-white fs-24 fw-700">سوالات متداول</h4>
          <p className="text-start fs-14 fw-400 text-white lh-md">
            در مدرسه مارول ترید، با هم یاد میگیریم چگونه با اعتماد بیشتری سرمایه
            گذاری کنیم تا سود بیشتری بدست آوریم. علاقه شما و آموزش های ما منجر
            به سود بیشتر شما می‌شود. اگر سئوالی در زمینه آموزش ما داری میتونی
            جوابش رو راحت پیدا کنی یا از ما بپرسی!
          </p>
          <Link style={{width : "200px" , height : "39px"}} to="/" className="btn btn-primary Button font-sans fs-14  fw-500">
            خرید اشتراک
          </Link>
        </Col>
        <Col xs="12" lg="6">
        {/* {questions.map((item, index) => (
          <Accordion label={item.title} text={item.text} />
        ))} */}
          <Accordion className={`w-100  Accordion   d-flex flex-column flex-center row-gap-4`}>
            {questions.map((item, index) => (
              <Accordion.Item
                key={index}
                eventKey={index}
                className="rounded-10 overflow-hidden border-0 w-100 bg-dark"
              >
                {/* <BAccordion.Header className="bg-info">{title}</BAccordion.Header> */}
                <Accordion.Button onClick={()=>setShow(p => p=!p)} className={`btn text-start border-0  text-white fw-700 fs-14 bg-dark ${show ? "AccordionBtn" : ""} `}>
                  {item.title}
                </Accordion.Button>

                <Accordion.Body className="transition text-primary bg-primary AccordionBody">
                  {item.text}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
}
