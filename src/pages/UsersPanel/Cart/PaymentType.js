import { useState } from "react";
import { Dropdown, FormControl, InputGroup , Container } from "react-bootstrap";
import { axios } from "../../../boot";
import cardIcon from "../../../assets/icons/card.svg";
import giftIcon from "../../../assets/icons/giftCard.svg";
import discountIcon from "../../../assets/icons/discount.svg";
import { toast } from "../../../methods";
import { paymentMethods } from "../../../constants";
import { useSelector } from "react-redux";

export default function PaymentType({
  paymentType = "",
  setPaymentType = () => { },
  setCartInfo = () => { },
}) {
  const isLogged = useSelector((s) => s.isLogged);
  const [voucher, setVoucher] = useState("");
  const submitDiscountCode = (e) => {
    e.preventDefault()
    const errorText =
      "برای اعمال کردن کد تخفیف لطفا وارد حساب کاربری خود شوید.";
    if (!isLogged) return toast({ text: errorText, type: "error" });
    const text = "کد تخفیف الزامی است.";
    const type = "error";
    if (!voucher) return toast({ text, type });
    const url = "/purchases/cart/apply-voucher";
    const body = { voucher };
    axios.post(url, body).then(({ data }) => {
      const text = "کد تخفیف با موفقیت اعمال شد";
      toast({ text });
      setVoucher("");
      setCartInfo(data);
    });
  };

  
  const [ giftCard , setGiftCard ] = useState("")
  const submitgiftCard = (e) => {
    e.preventDefault()
    const errorText =
      "برای اعمال کردن کارت هدیه لطفا وارد حساب کاربری خود شوید.";
    if (!isLogged) return toast({ text: errorText, type: "error" });
    const text = "لطفا کد را وارد کنید";
    const type = "error";
    if (!giftCard) return toast({ text, type });
    const url = "/purchases/cart/apply-voucher";
    const body = { giftCard };
    // axios.post(url, body).then(({ data }) => {
    //   const text = "کد تخفیف با موفقیت اعمال شد";
    //   toast({ text });
    //   setVoucher("");
    //   setCartInfo(data);
    // });
  };

  const option = [
    {
      id: 1,
      title: "کد تخفیف",
      src: discountIcon,
      state : voucher,
      setState : setVoucher
    },
    {
      id: 2,
      title: "کارت هدیه",
      src: giftIcon,
      state : giftCard,
      setState : setGiftCard
    },
  ]

  return (
    <Container className="bg-white py-2 rounded-5 shadow-sm" >
      <p className="fs-18 fw-700 text-start mb-2">
        شیوه پرداخت
      </p>
      <Dropdown onSelect={setPaymentType} className="mx-auto w-fit w-100 d-flex justify-content-start align-items-center">
        <Dropdown.Toggle
          as="button"
          className="w-fit d-flex align-items-center text-primary fw-bold"
        >
          <img width="30" src={cardIcon} alt="cardIcon" className="ms-2" />
          {paymentMethods.find((e) => e.id === paymentType)?.name}
          <i className="bi bi-chevron-down me-2" />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {paymentMethods.map((e) => (
            <Dropdown.Item
              key={e.id}
              eventKey={e.id}
              as="button"
              className="text-center"
            >
              {e.name}
              
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <h6 className="text-dark mt-4 mb-2">تخفیف</h6>
      
        {option.map((item, index) =>
        <form
        onSubmit={item.id == 1 ? submitDiscountCode : submitgiftCard }
        className="gap-2"
        >
          <div key={index} className="d-flex flex-column align-items-start flex-lg-row align-items-lg-center justify-content-lg-between gap-2 my-2">
            <div className="d-flex flex-column align-items-start flex-lg-row justify-content-lg-between align-items-lg-center">
              <img width="30" src={item.src} alt="discountIcon" />
              <span className="white-space-nowrap mx-2">{item.title}</span>
            </div>
            <InputGroup className="border-light-gray rounded-10px">
              <InputGroup.Text
                as="button"
                className="text-primary border-light-gray"
              >
                ثبت
              </InputGroup.Text>
              <FormControl
                value={item.state}
                onChange={({ target }) => item.setState(target.value)}
                className="border-light-gray border-end-0"
              />
              <InputGroup.Text className="text-secondary  border-start-0 ">
                افزودن
              </InputGroup.Text>
            </InputGroup>
          </div>
          </form>
        )}

      
    </Container>
  );
}
