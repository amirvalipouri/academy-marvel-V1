import {useState} from 'react'

import { Accordion, Col, Container, Row } from "react-bootstrap";
import {  questions } from "../../../../constants";

const Question = () => {
  const [ show , setShow ] = useState()
  return (
    <Container className="QuestionFreeTutorial">
      <Row>
        <Col xs={12} lg={12}>
          <Accordion className={`w-100 d-flex flex-column flex-center row-gap-4 my-4`}>
            {questions.map((item, index) => (
              <Accordion.Item
                key={index}
                eventKey={index}
                className="rounded-10 overflow-hidden border border-primary w-100 bg-white AccordionBody"
              >
                {/* <BAccordion.Header className="bg-info">{title}</BAccordion.Header> */}
                <Accordion.Button onClick={()=>setShow(index)} className={`btn text-start border-0  text-primary  fw-700 fs-14 ${show==index ? "bg-transparent" : "bg-white"}   `}>
                  {item.title}
                </Accordion.Button>

                <Accordion.Body className="transition   ">
                  {item.text}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>
      </Row>
    </Container>
  )
}

export default Question