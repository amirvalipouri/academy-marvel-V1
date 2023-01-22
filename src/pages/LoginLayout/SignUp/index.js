import React, { useContext, useState } from "react";
import { Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { Form, Input, Button } from "../../../components";
import { captchaKey, rules } from "../../../constants";
import { axios } from "../../../boot";
import { useSetToken } from "../../../hooks";
import Context from "../_context";

export default function SignUp() {
  const [ page , setPage ] = useContext(Context)
  const setToken = useSetToken();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const formControls = [
    {
      label: "نام و نام خانوادگی",
      state: "fullName",
    },
    {
      label: "شماره موبایل",
      state: "phone",
      type: "number",
      rules: rules.phoneNumber,
    },
    {
      label: "ایمیل",
      state: "email",
      rules: rules.email,
    },
    {
      label: "کلمه عبور",
      state: "password",
      type: "password",
      rules: rules.password,
    },
    // {
    //   label: "تکرار کلمه عبور",
    //   state: "rePassword",
    //   type: "password",
    //   rules: [(val = "") => data.password === val || "کلمه عبور مطابقت ندارد"],
    // },
  ];
  const signUp = () => {
    const url = "/users/sign-up";
    const body = { ...data };
    delete body.rePassword;
    axios.post(url, body).then(({ data, headers }) => {
      const token = headers["x-auth-token"];
      const role = data.role;
      setToken({ token, role });
      navigate("/dashboard");
    });
  };
  return (
    <Form onSubmit={signUp} className="SIGNUP row d-flex flex-column align-items-center justify-content-center ">
      <p className=" lh-normal  col-12 text-primary text-start fs-25 fw-700 my-2">ثبت‌ نام در مارول</p>
      {/* <p className="col-12 text-dark-blue text-center">عضویت از طریق</p>
      <div dir="ltr" className="col-12 d-flex flex-center col-gap-2">
        {[facebookIcon, googleIcon, linkedInIcon].map((item, index) => (
          <button
            key={index}
            type="button"
            className="sign-up-btn bg-white border border-gray rounded d-flex flex-center"
          >
            <img
              width="25"
              height="25"
              className="object-fit-contain"
              src={item}
              alt={item}
            />
          </button>
        ))}
      </div>
      <p className="col-12 text-dark-blue text-center">یا</p> */}

      {formControls.map((item, index) => (
        <Col key={index} xs="12">
          <Input
          className="bg-white rounded-4 border-0"
            {...item}
            value={data[item.state]}
            setValue={(val) => setData((p) => ({ ...p, [item.state]: val }))}
          />
        </Col>
      ))}
      {/* <ReCAPTCHA
        className="mx-auto d-block w-fit"
        sitekey={captchaKey}
        onChange={(recaptcha) => setData((p) => ({ ...p, recaptcha }))}
      /> */}
      <Col xs="12">
        <Button type="submit" className="w-100" disabled={!data}>
          عضویت
        </Button>
      </Col>
      <p className="col-12 text-center">
        حساب کاربری دارید؟{" "}
        <span onClick={()=>setPage("signIn")} className="text-primary cursor-pointer">
          وارد شوید
        </span>
      </p>
    </Form>
  );
}
