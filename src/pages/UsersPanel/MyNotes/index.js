import { useState } from 'react'

import './index.scss'
import { Container, Row, Col, Dropdown } from 'react-bootstrap'
import { IoMdArrowDropdown } from 'react-icons/io'
import NoteCard from '../../../components/NewVersion/NoteCard'
import {Modal} from '../../../components'


const MyNotes = () => {
    const [ show , setShow ] = useState(false)


    const fakeData = [
        {
            id : 0,
            text : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ایی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
            title : "آموزش زبان java",
            date : "00:32",
            img : "https://picsum.photos/id/231/200/300",
        },
        {
            id : 1,
            text : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ایی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
            title : "آموزش زبان java",
            date : "00:32",
            img : "https://picsum.photos/id/231/200/300",
        },
        {
            id : 3,
            text : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ایی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
            title : "آموزش زبان java",
            date : "00:32",
            img : "https://picsum.photos/id/231/200/300",
        },
    ]

    return (
        <Container>
            <Modal 
            show={show}
            onHide={setShow}
            variant="white"
            title="تغییرات خود را اعمال کنید"
            closeBtn
            >

            </Modal>
            <Row className="w-100 d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center my-2 ">
                <Col xs="12" lg='3'>
                    <p className="fs-16 fw-700 text-black">یادداشت‌های من</p>
                </Col>
                <Col xs="12" lg='3'>
                    <Dropdown>
                        <Dropdown.Toggle className="w-100 rounded-10px d-flex justify-content-between align-items-center btn btn-white Button font-sans fs-12 py-2 fw-500" variant="white" id="dropdown-basic">
                            <p className="fs-14 fw-500 text-black">همه یادداشت‌ها</p>
                            <span><IoMdArrowDropdown/></span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="my-2">
                            {/* {navItems.userControl.map((item, index) => (
                                <Dropdown.Item className="fs-12 fw-400">
                                    
                                </Dropdown.Item>
                            ))} */}

                            <Dropdown.Item className="fs-12 fw-400">
                                همه یادداشت‌ها
                            </Dropdown.Item>

                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>

            <Row>
                {fakeData.map((item , index)=>
                    <Col key={index} xs="12" lg="12">
                        <NoteCard onShow={setShow} {...item} />
                    </Col>
                )}
            </Row>

        </Container>
    )
}

export default MyNotes