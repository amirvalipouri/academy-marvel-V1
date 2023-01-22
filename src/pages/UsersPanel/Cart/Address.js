import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { axios } from "../../../boot";
import { Select, Form, Input, Button, Modal } from "../../../components";
import { rules } from "../../../constants";
import { convertPhone, toast } from "../../../methods";
import { useGetProvinces, useGetCities } from "../../../hooks";
import locationIcon from '../../../assets/icons/location.svg'
import edit from '../../../assets/icons/edit.svg'
export default function Address({
  data = {},
  setData = () => { },
  activeAddress = false,
  setActiveAddress = () => { },
  setCartInfo = () => { },
}) {
  const [show, setShow] = useState(false)
  const [provinces] = useGetProvinces();
  const [cities, getCities] = useGetCities();
  const setAddress = () => {
    const url = "/purchases/pre-purchase";
    const body = { ...data };
    if (isToIran) {
      body.address = `${body.province} - ${body.city} - ${body.address}`;
      body.province === "تهران" && (body.shippingMethod = "toTehran");
    }
    delete body.province;
    delete body.city;
    body.phone = convertPhone(body.phone);
    axios.post(url, body).then(({ data }) => {
      const text = "آدرس با موفقیت ثبت شد. لطفا فرایند خرید را ادامه دهید";
      toast({ text });
      setCartInfo(data);
      setActiveAddress(true);
    });
  };
  const isToIran = data.shippingMethod === "toIran";
  const formControls = [
    {
      label: "نام",
      state: "firstName",
    },
    {
      label: "نام خانوادگی",
      state: "lastName",
    },
    {
      tag: Select,
      label: "ارسال به",
      state: "shippingMethod",
      items: [
        { name: "داخل ایران", id: "toIran" },
        { name: "خارج از ایران", id: "toOtherCountries" },
      ],
    },
    isToIran && {
      tag: Select,
      label: "استان",
      state: "province",
      filter: true,
      items: provinces,
    },
    isToIran && {
      tag: Select,
      label: "شهر",
      state: "city",
      filter: true,
      items: cities,
    },
    {
      as: "textarea",
      label: "آدرس دقیق",
      state: "address",
    },
    {
      label: "کد پستی",
      state: "postCode",
    },
    {
      dir: "ltr",
      label: "شماره تلفن همراه",
      state: "phone",
      type: "number",
    },
    {
      as: "textarea",
      label: "توضیحات (اختیاری)",
      state: "comment",
      rules: rules.optional,
    },
  ].filter(Boolean);
  useEffect(() => getCities(data.province), [data.province]);
  return (
    <React.Fragment>
      <Modal
        type="primary"
        show={show}
        onHide={setShow}
        title="تغییر یا ویرایش اطلاعات"
        size="lg"
      >
        <Form className="row" onSubmit={setAddress}>
          {formControls.map((e) => (
            <Col
              key={e.state}
              xs="12"
              lg={
                e.as === "textarea" || e.state === "shippingMethod" ? "12" : "6"
              }
            >
              {React.createElement(e.tag ?? Input, {
                ...e,
                value: data[e.state],
                setValue: (val) => setData((p) => ({ ...p, [e.state]: val })),
              })}
            </Col>
          ))}
          <Col xs="12">
            <Button type="submit" className="w-100">
              <i className="bi bi-pen-fill ms-1" />
              {data.address && activeAddress ? "ویرایش" : "ثبت"} اطلاعات گیرنده
            </Button>
          </Col>
        </Form>
      </Modal>

      <div className="wrapper">
        <h6 className="text-dark mb-2 fs-18 fw-700 mx-2">آدرس تحویل سفارش</h6>
        <div className="d-flex align-items-center my-2 mx-2">
          <img className="rounded-circle" width="35" height="35" src="https://picsum.photos/200/300" alt="personal" />
          <p className="fs-16 fw-400 mx-3">{data.firstName} {data.lastName} امیر ولی پوری </p>
        </div>
        <div  className="d-flex justify-content-start align-items-center my-2 mx-2">
          <img className="mx-2" src={locationIcon} alt="location" />
          <p className="fs-16 fw-400 mx-3">١١٣ﻙﻼﭘ ٤، ﺎﺿﺭ ،ﺎﺿﺭ ﺭﺍﻮﻠﺑ ،ﺪﻬﺸﻣ ،ﯼﻮﺿﺭ ﻥﺎﺳﺍﺮﺧ</p>
        </div>

        <div  className="d-flex justify-content-start align-items-center my-2 mx-2">
          <img className="mx-2" src={edit} alt="editBtn" />
          <button onClick={()=>setShow(true)} className=" btn text-primary border-0 mx-2" >تغییر یا ویرایش اطلاعات</button>
        </div>

        {activeAddress && (
          <React.Fragment>
            <p>
              <i className="bi bi-person fs-3 ms-1" />
              {data.firstName} {data.lastName}
            </p>
            <p>
              <i className="bi bi-geo-alt fs-3 ms-1" />
              {data.address}
            </p>
          </React.Fragment>
        )}

      </div>
    </React.Fragment>
  );
}
