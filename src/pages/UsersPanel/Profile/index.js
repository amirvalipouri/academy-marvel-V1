import React ,  { useState, useEffect, useRef } from "react";

import { useSelector, useDispatch } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import './index.scss'
import { Form, Input, Button, Select } from "../../../components";
import { axios } from "../../../boot";
import { rules , cities , states } from "../../../constants";
import { objectSelect, toast, source } from "../../../methods";
import userProfile from '../../../assets/icons/userProfile.svg'
import { HiPencil } from 'react-icons/hi'
import  useGetCities  from '../../../hooks/useGetCities'
export default function Profile() {

  const formControls = [

    {
      label: "ایمیل",
      state: "email",
      EmailAccept : true,
      rules: rules.email,
    },
    // {
    //   label: "کد ملی",
    //   state: "nationalId",
    //   rules: rules.nationalId,
    // },
    {
      label: "رمز عبور",
      state: "password",
      rules: rules.newPassword,
    },
    {
      label: "رمز عبور جدید",
      state: "password",
      rules: rules.newPassword,
    },
    {
      label: "تکرار رمزعبور جدید",
      state: "password",
      rules: rules.newPassword,
    },
    
  ];

  const formControls2 = [
    {
      label: "نام",
      state: "firstName",
    },
    {
      label: "نام خانوادگی",
      state: "lastName",
    },
    {
      label: "تاریخ تولد",
      state: "birthday",
      type: "date",
      rules: rules.required,
    },
    {
      tag: Select,
      label: "جنسیت",
      state: "gender",
      rules: rules.required,
      items: [
        { name: "مرد", id: "male" },
        { name: "زن", id: "female" },
      ],
    },
    {
      tag: Select,
      label: "استان",
      state: "provice",
      rules: rules.required,
      items: states
    },
    {
      tag: Select,
      label: "شهر",
      state: "city",
      rules: rules.required,
      items: cities
    },
    {
      label: "آدرس",
      state: "address",
    },
    {
      label: "شغل",
      state: "job",
    },

    {
      label: "شماره موبایل (غیر قابل تغییر)",
      state: "phone",
      rules: rules.optional,
      readOnly: true,
    },
    // {
    //   label: "گذرواژه",
    //   state: "password",
    //   type: "password",
    //   rules: rules.password,
    // },
    // {
    //   label: "کد معرف (اختیاری)",
    //   state: "moaref",
    //   rules: [() => true],
    // },
  ];


  const inputFile = useRef();
  const dispatch = useDispatch();
  const profile = useSelector((s) => s.profile);
  const [data, setData] = useState({});
  const setProfile = (data = {}) => {
    dispatch({ type: "SET_PROFILE", data });
  };
  const submit = () => {
    const keys = formControls.map((e) => e.state);
    const url = "/users/me";
    const body = objectSelect(data, keys);
    body._id = data._id;
    delete body.phone;
    axios.put(url, body).then(() => {
      toast({});
      setProfile({ ...profile, ...body });
    });
  };
  useEffect(() => setData(profile), [profile]);

  const setProfileImage = (image) => {
    dispatch({ type: "SET_PROFILE_IMAGE", image });
  };

  // set profile image
  const uploadFile = (e) => {
    const file = e.target.files[0];
    const url = "";
    const body = new FormData();
    body.append("image", file);
    axios.post(url, body).then(({ data }) => {
      const imageUrl = data.address;
      setProfileImage(imageUrl);
      const text = "آپلود عکس موفقیت آمیز بود";
      toast({ text });
    });
  };


  return (
    <Container className="Profile">
      <div className="bg-white py-4 px-2 rounded-10px shadow-sm">
        <div className="d-flex align-items-center px-2 my-2">
          <img src={userProfile} alt="userProfile" />
          <p className="fs-14 fw-400 text-primary mx-1">اطلاعات هویتی</p>
          <hr className="w-90 d-none d-lg-block" />
        </div>
        <Row className="d-flex align-items-start">
          <Col xs="12" md="2" className="d-flex justify-content-center py-1" >
            <div className="profile-img position-relative">
              <div className="profile-box position-relative d-flex flex-center rounded-circle bg-light overflow-hidden">
                {profile.profilePic ? (
                  <img
                    className="bg-img"
                    src={source(profile.profilePic)}
                    alt="profile"
                  />
                ) : (
                  <i className="bi bi-person text-gray d-flex flex-center" />
                )}
              </div>
              {/* <i
              onClick={() => inputFile.current.click()}
              className="bi bi-camera d-block d-flex flex-center bg-violet text-white rounded-circle position-absolute bottom-0 right-0 cursor-pointer"
            ></i> */}
              <span className=" p-1 d-block d-flex flex-center bg-violet text-white bg-primary rounded-circle position-absolute bottom-0 right-0 cursor-pointer" onClick={() => inputFile.current.click()}>
                <HiPencil />
              </span>
              <input
                accept=".jpg, .png"
                ref={inputFile}
                type="file"
                className="d-none"
                onInput={uploadFile}
              />
            </div>
          </Col>
          <Col className="py-1" xs="12" md="10" >
            <Form onSubmit={submit} className="row">
              {formControls2.map((e, index) => 
                <Col key={index} xs="12" md="6" lg="4">
                  {React.createElement(e.tag ?? Input, {
                    ...e,
                    key: e.state,
                    value: data[e.state],
                    setValue: (val) => setData((p) => ({...p, [e.state]: val })),
                  })}
                </Col>
                )}
              <div className="col-12 d-flex flex-center">
                <Button type="submit">ثبت اطلاعات</Button>
              </div>
            </Form>
          </Col>
        </Row>
      </div>

      <div className="bg-white py-4 px-2 rounded-10px shadow-sm my-4">
        <div className="d-flex align-items-center px-2 my-2">
          <img src={userProfile} alt="userProfile" />
          <p className="fs-14 fw-400 text-primary mx-1">اطلاعات کاربری</p>
          <hr className="w-90 d-none d-lg-block" />
        </div>
        <Row className="d-flex align-items-start">
          <Col className="py-1" xs="12" md="12" >
            <p className="text-black mx-2">
            <i class="bi bi-exclamation-circle-fill mx-2  text-success"></i>
              آدرس ایمیل شما تایید شده است.
            </p>
            <Form onSubmit={submit} className="row">
              {formControls.map((e, index) => 
                <Col key={index} xs="12" md="6" lg="3">
                  {React.createElement(e.tag ?? Input, {
                    ...e,
                    className: `${e.EmailAccept ? "border border-success rounded" : ""} `,
                    key: e.state,
                    value: data[e.state],
                    setValue: (val) => setData((p) => ({...p, [e.state]: val })),
                  })}
                </Col>
                )}
              <div className="col-12 d-flex flex-center">
                <Button type="submit">ثبت اطلاعات</Button>
              </div>
            </Form>
          </Col>
        </Row>

      </div>
    </Container>
  );
}
