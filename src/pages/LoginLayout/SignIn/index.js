import React, { useEffect, useState, useContext } from "react";
import { Col, Row } from "react-bootstrap";
import cloneDeep from "lodash/cloneDeep";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Form, Input, Button, ToggleSwitch } from "../../../components";
import { rules, rolesPath } from "../../../constants";
import { axios } from "../../../boot";
import { useQuery, useSetToken } from "../../../hooks";
import { convertPhone, toast } from "../../../methods";
import Context from "../_context";
import LogoText from '../../../assets/logos/logoLogin.png'
import Timer from "../../../components/NewVersion/Timer";

export default function SignIn() {
  const [page, setPage] = useContext(Context);
  const navigate = useNavigate();
  const setToken = useSetToken();
  const { hasCart } = useQuery();
  const [params] = useSearchParams();
  const phone = params.get("phone");
  const [data, setData] = useState({ phone });
  const [phonee, setPhone] = useState("")
  const tabs = {
    sms: "شماره موبایل",
    email: "ایمیل",
  };
  const [activeTab, setActiveTab] = useState("sms");
  const smsFormControls = [
    {
      label: "شماره موبایل",
      state: "phone",
      type: "number",
      rules: rules.phoneNumber,
      // append: <Button onClick={() => sendCode()}>ارسال کد</Button>,
    },
  ];

  const verifyCodeControls = [

    {
      label: "کد ارسال شده",
      state: "code",
      type: "number",
    },
  ];

  const emailFormControls = [
    {
      label: "ایمیل",
      state: "email",
      type: "email",
      rules: rules.email,
    },
    {
      label: "رمز ورود",
      state: "password",
      type: "password",
      rules: rules.password,
    },
  ];




  const formControls = { sms: smsFormControls, email: emailFormControls, verify: verifyCodeControls };
  const sendCode = () => {
    const isValid = rules.phoneNumber.every(
      (rule) => rule(data.phone) === true
    );
    setData((p) => ({ ...p, code: "" }));
    if (!isValid)
      return toast({ text: "شماره موبایل نادرست است", type: "error" });
    const url = "/users/send-sms";
    setPhone(convertPhone(data.phone, true))
    const body = { phone: convertPhone(data.phone, true) };
    axios.post(url, body).then(() => {
      const text = "کد با موفقیت ارسال شد.";
      setActiveTab("verify")
      toast({ text });
    });
  };
  const verify = () => {
    const url = "/users/verify";

    // const body = cloneDeep(data);
    // body.phone = convertPhone(body.phone, true);
    const body = { phone: phonee, code: data.code };

    axios.post(url, body).then(handleSetToken);
  };
  const login = () => {
    const url = "/users/sign-in";
    const body = { ...data };
    axios.post(url, body).then(handleSetToken);
  };
  const handleSetToken = ({ data, headers }) => {
    const token = headers["x-auth-token"];
    const role = data.role;
    const text = "برای دسترسی به دوره‌ها ثبت‌نام کنید.";
    role === "unregistered" && toast({ text });
    setToken({ token, role });
    if (hasCart) return navigate("/cart");
    navigate(rolesPath[role] ?? "/", { replace: true });
  };
  const handleSubmit = () => {

    if (activeTab === "verify") return verify();
    return login();
  };
  useEffect(() => setData({}), [activeTab]);
  return (
    <Form className="SIGNIN row py-2 d-flex flex-column align-items-center justify-content-center ">

      {activeTab == "email" &&
        <p className=" my-2 col-12 text-primary text-start fs-25 fw-700">خوش آمدید</p>
      }

      {(activeTab == "sms" || activeTab == "verify") &&
        <div className="w-100 d-flex flex-column justify-content-center align-items-center">
          <img style={{ width: "115px", height: "93px" }} className="" src={LogoText} alt="logo" />
          <p className=" my-2 col-12 text-primary text-center fs-25 fw-700 my-1">خوش آمدید</p>
          {activeTab == "sms" ?
            <p className="my-1">
              در صورتی که خارج از ایران هستید با{" "}
              <button
                className="text-primary text-decoration-underline fw-bold"
                type="button"
                onClick={() => setActiveTab("email")}
              >
                ایمیل
              </button>{" "}
              وارد شوید
            </p>  
            :
            <Timer time={60} />
        }
        </div>
      }

      {/* <p className="col-12 mb-4">
        برای <span className="fw-bold">ورود</span> یا{" "}
        <span className="fw-bold">ثبت‌نام</span> {tabs[activeTab]} خود را وارد
        کنید
      </p> */}

      {formControls[activeTab].map((item) => (
        <Col key={item.state} xs="12">
          <Input
            className="bg-white rounded-4 fs-14 fw-400"
            {...item}
            value={data[item.state]}
            setValue={(val) => setData((p) => ({ ...p, [item.state]: val }))}
          />
        </Col>
      ))}
      {activeTab == "email" &&
        <Col xs="12" className="d-flex algn-items-center justify-content-between fs-12 fw-700">
          <ToggleSwitch
            value={data.remember}
            setValue={(val) => setData((p) => ({ ...p, remember: val }))}
            label="مرا به خاطر بسپار"
          />
          <Link to="/forget-password" className="text-dark-blue">
            فراموشی رمز ورود
          </Link>
        </Col>
      }

      <Col xs="12">
        {activeTab == "sms" ?
          <Button onClick={sendCode} type="button" className="w-100">
            دریافت کد عبور
          </Button>
          :
          <Button onClick={handleSubmit} type="button" className="w-100">
            ورود
          </Button>

        }
      </Col>



      {activeTab == "email" &&
        <Col xs="12">
          <div className="line-label position-relative w-100 text-center text-gray">
            <span className="d-block position-relative w-fit mx-auto px-2 fs-14 fw-400">
              ورود راحت با
            </span>
          </div>
        </Col>
      }


      {activeTab == "email" &&
        <Row dir="ltr" className="col-12">
          <Col xs="6">
            <button
              type="button"
              className="w-100 bg-white border border-gray rounded d-flex flex-center col-gap-2 lh-normal py-2"
            >
              <svg width="83" height="28" viewBox="0 0 83 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.8475 16.6183H36.3701V18H30.1188V8.04783H31.8475V16.6183ZM39.3 18H37.6383V10.6043H39.3V18ZM37.5348 8.68087C37.5348 8.42522 37.616 8.2142 37.7783 8.04783C37.9406 7.87739 38.1719 7.79217 38.4722 7.79217C38.7725 7.79217 39.0038 7.87739 39.1661 8.04783C39.3325 8.2142 39.4157 8.42522 39.4157 8.68087C39.4157 8.93246 39.3325 9.14145 39.1661 9.30783C39.0038 9.4742 38.7725 9.55739 38.4722 9.55739C38.1719 9.55739 37.9406 9.4742 37.7783 9.30783C37.616 9.14145 37.5348 8.93246 37.5348 8.68087ZM42.6432 10.6043L42.6918 11.4565C43.2397 10.7951 43.9579 10.4643 44.8466 10.4643C46.3846 10.4643 47.1678 11.347 47.1962 13.1122V18H45.5345V13.2096C45.5345 12.7388 45.433 12.3919 45.2301 12.1687C45.0272 11.9414 44.6965 11.8278 44.2379 11.8278C43.5684 11.8278 43.0692 12.1301 42.7405 12.7348V18H41.0788V10.6043H42.6432ZM51.2868 14.8287L50.5442 15.5896V18H48.8824V7.5H50.5442V13.5565L51.0677 12.9052L53.1068 10.6043H55.1033L52.3581 13.6843L55.4016 18H53.4781L51.2868 14.8287ZM59.4534 18.1339C58.4024 18.1339 57.5482 17.8032 56.8908 17.1417C56.2375 16.4803 55.9108 15.5977 55.9108 14.4939V14.287C55.9108 13.5484 56.0528 12.889 56.3369 12.3087C56.625 11.7284 57.0247 11.2759 57.536 10.9513C58.0514 10.6267 58.6276 10.4643 59.2647 10.4643C60.2711 10.4643 61.0482 10.787 61.596 11.4322C62.1439 12.0733 62.4178 12.9823 62.4178 14.1591V14.8287H57.5847C57.6375 15.4374 57.8424 15.9203 58.1995 16.2774C58.5566 16.6345 59.007 16.813 59.5508 16.813C60.3097 16.813 60.9285 16.5046 61.4073 15.8878L62.3021 16.74C62.0059 17.1823 61.6102 17.5252 61.1152 17.7687C60.6241 18.0122 60.0702 18.1339 59.4534 18.1339ZM59.2526 11.7974C58.7981 11.7974 58.4308 11.9577 58.1508 12.2783C57.8708 12.5988 57.6923 13.0432 57.6152 13.6113H60.7804V13.4896C60.7439 12.9336 60.5957 12.5136 60.336 12.2296C60.0763 11.9414 59.7152 11.7974 59.2526 11.7974ZM63.3923 14.2443C63.3923 13.1081 63.6561 12.1951 64.1836 11.5052C64.7112 10.8113 65.4193 10.4643 66.308 10.4643C67.0912 10.4643 67.7242 10.7383 68.2071 11.2861V7.5H69.8688V18H68.3654L68.2862 17.233C67.7871 17.8336 67.1236 18.1339 66.2958 18.1339C65.4315 18.1339 64.7315 17.787 64.1958 17.093C63.6602 16.3951 63.3923 15.4455 63.3923 14.2443ZM65.0541 14.3904C65.0541 15.1412 65.1981 15.7275 65.4862 16.1496C65.7744 16.5716 66.1862 16.7826 66.7219 16.7826C67.3996 16.7826 67.8946 16.4803 68.2071 15.8757V12.7165C67.9028 12.1241 67.4117 11.8278 66.7341 11.8278C66.1944 11.8278 65.7784 12.0409 65.4862 12.467C65.1981 12.893 65.0541 13.5342 65.0541 14.3904ZM73.3703 18H71.7086V10.6043H73.3703V18ZM71.6051 8.68087C71.6051 8.42522 71.6863 8.2142 71.8486 8.04783C72.0109 7.87739 72.2422 7.79217 72.5425 7.79217C72.8428 7.79217 73.0741 7.87739 73.2364 8.04783C73.4028 8.2142 73.486 8.42522 73.486 8.68087C73.486 8.93246 73.4028 9.14145 73.2364 9.30783C73.0741 9.4742 72.8428 9.55739 72.5425 9.55739C72.2422 9.55739 72.0109 9.4742 71.8486 9.30783C71.6863 9.14145 71.6051 8.93246 71.6051 8.68087ZM76.7135 10.6043L76.7622 11.4565C77.31 10.7951 78.0282 10.4643 78.9169 10.4643C80.4549 10.4643 81.2381 11.347 81.2665 13.1122V18H79.6048V13.2096C79.6048 12.7388 79.5033 12.3919 79.3004 12.1687C79.0975 11.9414 78.7668 11.8278 78.3082 11.8278C77.6387 11.8278 77.1395 12.1301 76.8109 12.7348V18H75.1491V10.6043H76.7135Z" fill="black" />
                <g clip-path="url(#clip0_61_85)">
                  <path d="M18.0336 21.6965V21.6958H18.0381V15.0804C18.0381 11.8441 17.3414 9.35107 13.558 9.35107C11.7391 9.35107 10.5186 10.3492 10.0203 11.2954H9.96766V9.65321H6.38037V21.6958H10.1157V15.7327C10.1157 14.1627 10.4133 12.6445 12.3577 12.6445C14.2735 12.6445 14.302 14.4363 14.302 15.8335V21.6965H18.0336Z" fill="#0077B5" />
                  <path d="M0.297852 9.65405H4.03771V21.6966H0.297852V9.65405Z" fill="#0077B5" />
                  <path d="M2.16605 3.65869C0.970289 3.65869 0 4.62898 0 5.82474C0 7.02051 0.970289 8.01109 2.16605 8.01109C3.36182 8.01109 4.33211 7.02051 4.33211 5.82474C4.33135 4.62898 3.36106 3.65869 2.16605 3.65869V3.65869Z" fill="#0077B5" />
                </g>
                <defs>
                  <clipPath id="clip0_61_85">
                    <rect width="18.0379" height="18.0379" fill="white" transform="translate(0 3.65869)" />
                  </clipPath>
                </defs>
              </svg>


            </button>
          </Col>
          <Col xs="6">
            <button
              type="button"
              className="w-100 bg-white border border-gray rounded d-flex flex-center col-gap-2 lh-normal py-2"
            >
              <svg width="76" height="28" viewBox="0 0 76 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M39.0038 16.7096C38.6427 17.1762 38.1415 17.5313 37.5004 17.7748C36.8633 18.0142 36.1389 18.1339 35.3273 18.1339C34.4954 18.1339 33.7569 17.9452 33.1117 17.5678C32.4705 17.1904 31.9754 16.6507 31.6264 15.9487C31.2775 15.2426 31.0969 14.4209 31.0847 13.4835V12.7043C31.0847 11.1988 31.4438 10.0241 32.1621 9.18C32.8844 8.33188 33.8908 7.90783 35.1812 7.90783C36.289 7.90783 37.1676 8.18174 37.8169 8.72957C38.4702 9.27739 38.8618 10.0667 38.9917 11.0974H37.2995C37.1088 9.89623 36.4128 9.29565 35.2117 9.29565C34.4366 9.29565 33.8482 9.57565 33.4464 10.1357C33.0447 10.6957 32.8357 11.5154 32.8195 12.5948V13.3557C32.8195 14.431 33.0467 15.267 33.5012 15.8635C33.9557 16.46 34.5867 16.7583 35.3943 16.7583C36.2748 16.7583 36.9038 16.5574 37.2812 16.1557V14.2078H35.2299V12.893H39.0038V16.7096ZM40.4314 14.2322C40.4314 13.5099 40.5734 12.8586 40.8575 12.2783C41.1456 11.6939 41.5494 11.2455 42.0688 10.933C42.5882 10.6206 43.1847 10.4643 43.8583 10.4643C44.8566 10.4643 45.6662 10.787 46.287 11.4322C46.912 12.0733 47.2488 12.9255 47.2975 13.9887L47.3096 14.3783C47.3096 15.1046 47.1676 15.7559 46.8836 16.3322C46.6036 16.9043 46.2018 17.3487 45.6783 17.6652C45.1589 17.9777 44.5583 18.1339 43.8766 18.1339C42.8337 18.1339 41.9978 17.787 41.3688 17.093C40.7439 16.3991 40.4314 15.4739 40.4314 14.3174V14.2322ZM42.0931 14.3783C42.0931 15.1371 42.2494 15.7336 42.5618 16.1678C42.8783 16.598 43.3166 16.813 43.8766 16.813C44.4366 16.813 44.8728 16.5939 45.1853 16.1557C45.4978 15.7174 45.654 15.0762 45.654 14.2322C45.654 13.4855 45.4917 12.893 45.167 12.4548C44.8465 12.0165 44.4102 11.7974 43.8583 11.7974C43.3186 11.7974 42.8885 12.0145 42.5679 12.4487C42.2514 12.8788 42.0931 13.522 42.0931 14.3783ZM48.4021 14.2322C48.4021 13.5099 48.5441 12.8586 48.8282 12.2783C49.1163 11.6939 49.5201 11.2455 50.0395 10.933C50.5589 10.6206 51.1554 10.4643 51.829 10.4643C52.8273 10.4643 53.6369 10.787 54.2577 11.4322C54.8827 12.0733 55.2195 12.9255 55.2682 13.9887L55.2804 14.3783C55.2804 15.1046 55.1383 15.7559 54.8543 16.3322C54.5743 16.9043 54.1725 17.3487 53.649 17.6652C53.1296 17.9777 52.529 18.1339 51.8473 18.1339C50.8044 18.1339 49.9685 17.787 49.3395 17.093C48.7146 16.3991 48.4021 15.4739 48.4021 14.3174V14.2322ZM50.0638 14.3783C50.0638 15.1371 50.2201 15.7336 50.5325 16.1678C50.849 16.598 51.2873 16.813 51.8473 16.813C52.4073 16.813 52.8435 16.5939 53.156 16.1557C53.4685 15.7174 53.6247 15.0762 53.6247 14.2322C53.6247 13.4855 53.4624 12.893 53.1377 12.4548C52.8172 12.0165 52.3809 11.7974 51.829 11.7974C51.2893 11.7974 50.8592 12.0145 50.5386 12.4487C50.2221 12.8788 50.0638 13.522 50.0638 14.3783ZM56.3911 14.2443C56.3911 13.0959 56.6609 12.1788 57.2006 11.493C57.7403 10.8072 58.4566 10.4643 59.3493 10.4643C60.1934 10.4643 60.8569 10.7586 61.3398 11.347L61.4189 10.6043H62.9102V17.7748C62.9102 18.7446 62.6079 19.5096 62.0032 20.0696C61.4026 20.6296 60.589 20.9096 59.5624 20.9096C59.0226 20.9096 58.4931 20.7959 57.9737 20.5687C57.4583 20.3455 57.0647 20.0513 56.7928 19.6861L57.5841 18.6878C58.0913 19.2965 58.7183 19.6009 59.465 19.6009C60.0169 19.6009 60.4531 19.4507 60.7737 19.1504C61.0942 18.8542 61.2545 18.4159 61.2545 17.8357V17.3365C60.7757 17.8681 60.1366 18.1339 59.3371 18.1339C58.4728 18.1339 57.7647 17.791 57.2128 17.1052C56.665 16.4154 56.3911 15.4617 56.3911 14.2443ZM58.0467 14.3904C58.0467 15.133 58.1969 15.7174 58.4971 16.1435C58.8015 16.5696 59.2235 16.7826 59.7632 16.7826C60.4328 16.7826 60.9299 16.4965 61.2545 15.9243V12.6678C60.938 12.1078 60.445 11.8278 59.7754 11.8278C59.2276 11.8278 58.8015 12.0449 58.4971 12.4791C58.1969 12.9093 58.0467 13.5464 58.0467 14.3904ZM66.3918 18H64.7301V7.5H66.3918V18ZM71.4515 18.1339C70.4005 18.1339 69.5463 17.8032 68.8889 17.1417C68.2355 16.4803 67.9089 15.5977 67.9089 14.4939V14.287C67.9089 13.5484 68.0509 12.889 68.3349 12.3087C68.6231 11.7284 69.0228 11.2759 69.5341 10.9513C70.0494 10.6267 70.6257 10.4643 71.2628 10.4643C72.2692 10.4643 73.0463 10.787 73.5941 11.4322C74.1419 12.0733 74.4158 12.9823 74.4158 14.1591V14.8287H69.5828C69.6355 15.4374 69.8405 15.9203 70.1976 16.2774C70.5547 16.6345 71.0051 16.813 71.5489 16.813C72.3077 16.813 72.9265 16.5046 73.4054 15.8878L74.3002 16.74C74.0039 17.1823 73.6083 17.5252 73.1132 17.7687C72.6222 18.0122 72.0683 18.1339 71.4515 18.1339ZM71.2506 11.7974C70.7961 11.7974 70.4289 11.9577 70.1489 12.2783C69.8689 12.5988 69.6903 13.0432 69.6132 13.6113H72.7784V13.4896C72.7419 12.9336 72.5938 12.5136 72.3341 12.2296C72.0744 11.9414 71.7132 11.7974 71.2506 11.7974Z" fill="black" />
                <path d="M4.17929 14.5573L3.52288 17.0078L1.1237 17.0585C0.406695 15.7286 0 14.2071 0 12.5902C0 11.0266 0.38025 9.55219 1.05427 8.25391H1.05479L3.19073 8.6455L4.1264 10.7686C3.93057 11.3396 3.82383 11.9524 3.82383 12.5902C3.8239 13.2823 3.94928 13.9455 4.17929 14.5573Z" fill="#FBBB00" />
                <path d="M18.6931 10.8286C18.8014 11.399 18.8579 11.988 18.8579 12.5901C18.8579 13.2651 18.7869 13.9236 18.6517 14.5587C18.1927 16.7201 16.9933 18.6075 15.3319 19.9431L15.3314 19.9425L12.641 19.8053L12.2603 17.4283C13.3627 16.7818 14.2243 15.77 14.6781 14.5587H9.63623V10.8286H14.7517H18.6931Z" fill="#518EF8" />
                <path d="M15.3316 19.9425L15.3321 19.943C13.7163 21.2418 11.6637 22.0189 9.42923 22.0189C5.83848 22.0189 2.71659 20.0119 1.12402 17.0584L4.17962 14.5571C4.97588 16.6822 7.02589 18.195 9.42923 18.195C10.4623 18.195 11.43 17.9158 12.2605 17.4283L15.3316 19.9425Z" fill="#28B446" />
                <path d="M15.4463 5.33184L12.3917 7.83257C11.5323 7.29534 10.5163 6.985 9.42786 6.985C6.97012 6.985 4.88176 8.56718 4.12539 10.7685L1.05374 8.25377H1.05322C2.62247 5.22824 5.78374 3.16113 9.42786 3.16113C11.7157 3.16113 13.8133 3.97607 15.4463 5.33184Z" fill="#F14336" />
              </svg>
            </button>
          </Col>

        </Row>
      }


      {/* {activeTab == "sms" &&
        <p className="">
          در صورتی که خارج از ایران هستید با{" "}
          <button
            className="text-primary text-decoration-underline fw-bold"
            type="button"
            onClick={() => setActiveTab("email")}
          >
            ایمیل
          </button>{" "}
          وارد شوید
        </p>
        } */}


      <p className="col-12 text-center fs-14 fw-400">
        حساب کاربری ندارید؟{" "}
        {/* <Link to="/sign-up" replace className="text-primary">
            ثبت نام کنید
          </Link> */}
        <span onClick={() => setPage("signUp")} className="text-primary cursor-pointer">
          ثبت نام کنید
        </span>
      </p>

    </Form>
  );
}
