import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { Badge, Button, Modal } from "../../../components";
import { axios } from "../../../boot";
import Specifications from "./Specifications";
import Review from "./Review";
import UserPoint from "./UserPoint";
import Qa from "./Qa";
import { offCal, showActiveImg, source } from "../../../methods";
import { useAddToCart, useProductStorage } from "../../../hooks";
import { Link } from "react-router-dom";
import "./index.scss";
export default function Product() {
  const productStorage = useProductStorage();
  const addToCart = useAddToCart();
  const isLogged = useSelector((s) => s.isLogged);
  const params = useParams();
  const productId = params.id;
  const [showModal, setShowModal] = useState(false);
  const [product, setProduct] = useState({});
  const hasOff = product.off !== 0;
  const hasOffUds = product.offUsd !== 0;
  const totalPrice = offCal(product.price, product.off).toLocaleString();
  const totalPriceUsd = offCal(product.priceUsd, product.offUsd);
  const activeImg = showActiveImg(product.img);
  const getProductInfo = () => {
    const url = `/pub/shop/products/${productId}`;
    axios.get(url).then(({ data }) => {
      setProduct(data);
    });
  };
  const addProductToCart = () => {
    if (isLogged) return addToCart(productId, 1);
    productStorage.set(product);
  };
  const showProductinfo = (data = product) => [
    {
      title: "ناشر",
      value: data?.info?.find((e) => e.label == "ناشر")?.value,
    },
    {
      title: "نویسندگان",
      value: data?.info?.find((e) => e.label == "نویسنده")?.value,
    },
    {
      title: "شابک",
      value: data?.info?.find((e) => e.label == "شابک")?.value,
    },
    {
      title: "قطع",
      value: data?.info?.find((e) => e.label == "قطع")?.value,
    },
    // {
    //   title: "سال چاپ",
    //   value: data.count,
    // },
    // {
    //   title: "نوبت چاپ",
    //   value: data.count,
    // },
    {
      title: "صفهات",
      value: data?.info?.find((e) => e.label == "تعداد صفحه")?.value,
    },
    {
      title: "زبان نوشتار",
      value: data?.info?.find((e) => e.label == "زبان نوشتار")?.value,
    },
    // {
    //   title: "قیمت",
    //   value: `${totalPrice} تومان`,
    // },
    // {
    //   title: "قیمت تتری",
    //   value: totalPriceUsd,
    // },
    // {
    //   title: "وزن محصول",
    //   value: data.weight,
    // },
    // {
    //   title: "تعداد موجود",
    //   value: data.count,
    // },

  ];
  const tabs = [
    {
      title: "مشخصات کتاب",
      id: 0,
      component: Specifications,
    },
    {
      title: "نقد و بررسی",
      id: 1,
      component: Review,
    },
    {
      title: "دﯾﺪﮔﺎه ﮐﺎرﺑﺮان",
      id: 2,
      component: UserPoint,
    },
    {
      title: "ﭘﺮﺳﺶ و ﭘﺎﺳﺦ",
      id: 3,
      component: Qa,
    },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const ActiveTabComponent = tabs.find((e) => e.id === activeTab).component;
  const isActvieTab = (id = 0) => {
    const isActive = activeTab === id;
    if (isActive) return "bg-primary bg-opacity-20 fw-bold";
    return "";
  };
  useEffect(getProductInfo, []);
  return (
    <Container className="Product">
      <Modal title={product.title_fa} show={showModal} onHide={setShowModal}>
        <img
          className="w-100 d-block mb-4"
          src={source(activeImg)}
          alt={product.title}
        />
        <Button
          onClick={() => setShowModal(false)}
          className="d-block mx-auto px-3"
        >
          بستن
        </Button>
      </Modal>
      <Row style={{height : "auto" , minHeight : "400px"}} className="wrapper">
        <Col xs="12" md="5" lg="3" xl="2">
          <div className="img-box d-flex flex-center w-100 position-relative">
            {activeImg && (
              <img
                onClick={() => setShowModal(true)}
                
                className="cursor-pointer shadow"
                src={source(activeImg)}
                alt={product.title}
              />
            )}
          </div>
        </Col>
        <Col xs="12" md="7" lg="9" xl="10">
          <div className="w-100 d-flex flex-column flex-lg-row align-items-center gap-3">
            <p className="text-black ms-lg-auto fs-25 fw-700">{product.title_fa}</p>
            <div className="d-flex flex-column flex-center">
              {hasOffUds && (
                <h6 className="text-secondary">
                  <span className="text-decoration-line-through">
                    {product.priceUsd} تتر
                  </span>{" "}
                  <Badge variant="danger" label={`${product.offUsd}%`} />
                </h6>
              )}
              <h5 className="text-dark">{totalPriceUsd} تتر</h5>
            </div>
            <div className="d-flex flex-column flex-center">
              {hasOff && (
                <h6 className="text-secondary">
                  <span className="text-decoration-line-through">
                    {product.price?.toLocaleString()} تومان
                  </span>{" "}
                  <Badge className="rounded-10px" variant="danger" label={`${product.off}%`} />
                </h6>
              )}
              <p className="text-black fw-700 fs-25">{totalPrice} تومان</p>
            </div>
          </div>
          <hr className="my-3 bg-light-gray" />


          {/* <div>
            <div className="w-fit d-flex flex-center mx-auto me-lg-0 text-gold fs-5">
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
            </div>
          </div> */}
          <Row className="justify-content-lg-between mt-4">
            <div className="d-flex">
              <span className="bi bi-star-fill text-gray mr-1"></span>
              {[1, 2, 3, 4].map((item, index) =>
                <span key={index} className="bi bi-star-fill text-yellow mx-1"></span>
              )}

            </div>
            {showProductinfo().map((e) => (
              <Col key={e.title} xs="12" md="6" lg="5" className="px-0">
                <p className=" fs-18 fw-400">
                  <i className="bi bi-dot" />
                  <span className="text-dark">
                    {e.title}: {e.value}
                  </span>
                </p>
              </Col>
            ))}
          </Row>
          <Button className="mt-3" onClick={addProductToCart}>
            افزودن به سبد خرید
          </Button>
          <hr className="my-3 bg-light-gray" />
          <Row className="">
            <Col className="d-flex justify-content-start" xs="6" lg="4">
              <Link to="/" className="text-primary fs-12 fw-300">
                <i className="bi bi-question-circle-fill ms-1" />
                راهنمای خرید امن
              </Link>
            </Col>
            <Col className="d-flex justify-content-center" xs="6" lg="4">
              <Link to="/" className="text-primary  fs-12 fw-300">
                <i className="bi bi-info-circle-fill ms-1" />
                گزارش مشکل آگهی
              </Link>
            </Col>
            <Col className="d-flex justify-content-center  justify-content-lg-end " xs="6" lg="4">
              <div>
                <p className="fs-12 fw-300">اشتراک گذاری</p>
                <a href="/"><span className="bi bi-telegram text-dark fs-12"></span></a>
                <a href="/"><span className="bi bi-instagram  text-dark mx-1 fs-12"></span></a>
                <a href="/"><span className="bi bi-twitter  text-dark mx-1 fs-12"></span></a>
                <a href="/"><span className="bi bi-facebook text-dark fs-12"></span></a>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <div className="mt-4 wrapper p-0">
        <div className="tabs-btn d-flex flex-center border-bottom border-light-gray">
          {tabs.map((e) => (
            <button
              key={e.id}
              onClick={() => setActiveTab(e.id)}
              className={`flex-1 fs-5 text-primary transition ${isActvieTab(
                e.id
              )}`}
            >
              {e.title}
            </button>
          ))}
        </div>
        <div className="p-3">
          <ActiveTabComponent info={product.info} desc={product.description} />
        </div>
      </div>
    </Container>
  );
}
