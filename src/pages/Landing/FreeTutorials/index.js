import { useEffect, useState, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { axios } from "../../../boot";
import SearchBox from "../../../components/NewVersion/SearchBox";
import { Modal } from "../../../components";
import { category } from "../../../constants/";
import Filter from "./Filter";
import { BsFilter } from 'react-icons/bs'
import './index.scss'
import { Button } from "../../../components";
export default function FreeTutorials() {
  const [categories, setCategories] = useState([]);
  const [show, setShow] = useState(false)

  const getCategories = () => {
    const url = "/pub/categories";
    axios.get(url).then((res) => {
      const data = res.data.data.map((e) => ({
        name: e.title_fa,
        id: e.title,
        img: e.img,
      }));
      setCategories(data);
    });
  };
  useEffect(getCategories, []);
  return (
    <Container className="FreeTuTorilas-Category position-relative my-2">
      
      <Row className="d-flex justify-content-center align-items-start">
        <Col className="bg-white p-4 rounded-10 d-none d-lg-block shadow" xs="12" lg="3">
          <div className="my-4">
            <p className="fs-12 fw-700 text-black my-2">دسته‌بندی</p>

            {category.category.map((item, index) =>
              <div key={item.id} className="d-flex my-2">
                <input type="checkbox" />
                <p className="mx-1 fs-10 fw-400 text-black">{item.label}</p>
              </div>
            )}
          </div>

          <div className="my-4">
            <p className="fs-12 fw-700 text-black my-2">سطح آموزش</p>

            {category.levelTeach.map((item, index) =>
              <div key={item.id} className="d-flex my-2">
                <input type="checkbox" />
                <p className="mx-1 fs-10 fw-400 text-black">{item.label}</p>
              </div>
            )}
          </div>

          <div className="my-4">
            <p className="fs-12 fw-700 text-black my-2">مدت زمان</p>

            {category.timing.map((item, index) =>
              <div key={item.id} className="d-flex my-2">
                <input type="checkbox" />
                <p className="mx-1 fs-10 fw-400 text-black">{item.label}</p>
              </div>
            )}
          </div>
          
        </Col>
      

        <Col className="d-lg-none" xs={12}>
          <Button onClick={() => setShow(p => !p)} className="mx-3">
            <BsFilter />
            فیلتر
          </Button>
        </Col>

        <Col xs="12" lg="9">
          <div className="d-flex flex-column align-items-start flex-lg-row justify-content-center  justify-content-lg-between align-items-lg-center mb-4 px-2" xs="12" lg="12">
            <div>
              <SearchBox className="bg-white shadow border-0 p-2 rounded-10px m-2" />
            </div>

            <p className="fs-12 fw-400 m-2">325 مورد یافت شد</p>
          </div>
          <Row>
            {categories.map((item) => (

              <Col key={item.id} xs="11" md="6" lg="4">
                <Link key={item.id}
                  to={item.id} >
                  <div className={`NewTopicCard bg-white shadow  position-relative p-1  w-100`}>


                    <div className="d-flex justify-content-center w-100" >
                      <img className="NewTopicCard-image" src={item.img} alt={item.id} />
                    </div>
                    <div className="NewTopicCard-teacher" >
                      <img src={item.img} alt={item.id} />
                    </div>
                    <div className="my-4 px-1 py-2">
                      <p className='fs-14 fw-700 text-black my-2 mx-2'>{item.name}</p>
                      <p className='fs-10 fw-400  my-2 mx-2'>{item.name}</p>
                    </div>
                  </div>
                </Link>
                {/* <Link
              key={item.id}
              to={item.id}
              className="d-flex flex-column flex-center gap-4 w-100 bg-white rounded p-2 shadow-sm"
            >
              {item.img ? (
                <img
                  width="50"
                  height="50"
                  className="rounded-circle bg-info object-fit-contain"
                  src={item.img}
                  alt={item.name}
                />
              ) : (
                <i
                  style={{
                    width: "50px",
                    height: "50px",
                  }}
                  className="bi bi-journal-bookmark-fill text-white fs-2 bg-info bg-opacity-75 rounded-circle d-flex flex-center"
                />
              )}
              <h5>{item.name}</h5>
            </Link> */}
              </Col>
            ))}
            <Filter show={show} onHide={setShow} />
          </Row>
        </Col>

      </Row>

      
    </Container>
  );
}
