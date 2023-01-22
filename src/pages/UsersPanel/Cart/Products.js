import { useContext } from "react";
import { ButtonGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { showActiveImg, source } from "../../../methods";
import { axios } from "../../../boot";
import { useProductStorage } from "../../../hooks";
import { CartCountContext } from "../../../contexts/CartCount";
import ShippingTime from "./ShippingTime";
import money from '../../../assets/icons/money.svg'

export default function Products({ cartItems = {}, setCartInfo = () => { }, step = 0 , paymentType = ""  }) {
  const productStorage = useProductStorage();
  const isLogged = useSelector((s) => s.isLogged);
  const { setCount } = useContext(CartCountContext);
  const cartCount = cartItems?.items.map((e) => e.count).reduce((a, b) => a + b);
  const handleCount = (productId, count) => {
    if (!isLogged) {
      const product = { _id: productId };
      const type = count < 0 ? "remove" : "set";
      productStorage[type](product);
      setCartInfo(productStorage.getCartInfo());
      return;
    }
    const url = "/purchases/cart";
    const body = { productId, count };
    axios.post(url, body).then(({ data }) => {
      setCount((p) => p + count);
      setCartInfo(data);
    });
  };


  const {
    totalPrice = 0,
    totalPriceUsd = 0,
    shippingFee = 0,
    shippingFeeUsd = 0,
    offPrice = 0,
    offPriceUsd = 0,
  } = cartItems;
  const price = {
    IRR: totalPrice - shippingFee,
    USD: totalPriceUsd - shippingFeeUsd,
  }[paymentType];
  const finalPrice = {
    IRR: totalPrice - offPrice,
    USD: totalPriceUsd - offPriceUsd,
  }[paymentType];
  const off = {
    IRR: offPrice,
    USD: offPriceUsd,
  }[paymentType];
  const fee = {
    IRR: shippingFee,
    USD: shippingFeeUsd,
  }[paymentType];
  const measure = {
    IRR: "تومان",
    USD: "تتر",
  }[paymentType];
  const hasOff = !!off;
  const hasFee = !!fee;
  const info = [
    {
      label: "مبلغ قابل پرداخت",
      value: `${finalPrice?.toLocaleString()} ${measure}`,
      labelColor: "dark",
      valueColor: "primary",
    },
  ]
    .filter(Boolean)
    .map((e, id) => ({
      id,
      labelColor: "secondary",
      valueColor: "secondary",
      ...e,
    }));

    console.log(info)


  return (
    <div className="wrapper">
      <div className="d-flex align-items-center justify-content-between">
        <h6 className="text-dark">مرسولات انتخابی شما</h6>
        <hr class="w-75 d-none d-lg-block" />
        <h6 className="text-dark">{cartCount} کالا</h6>
      </div>
      <p className="my-2 fs-14">
        <i className="bi bi-truck fs-20 ms-1 text-primary" />
        ارسال توسط انتشارات جهاد دانشگاهی
      </p>

      {step == 1 &&
        <p className="my-2 fs-14">
          <i className="bi bi-clock fs-20 ms-1 text-primary" />
          سه شنبه ، 12 شهریور یازه 9-12
        </p>
      }

      {step == 1 &&
        <p className="my-2 fs-14">
          <img width="20" src={money} alt="money" className="ms-2" />

          {info.map((e)=>
            <span> {e.label} : {e.value} </span>
          )}
        </p>
      }
      <div className="d-flex align-items-start gap-4 overflow-auto w-full p-2">
        {cartItems?.items.map((e, i) => (
          <div
            key={i}
            className="cart-item border border-light-gray shadow-sm rounded"
          >
            <img
              height="135"
              className="object-fit-cover w-100 d-block rounded"
              src={source(showActiveImg(e.product?.img))}
              alt={`cart-item-${i}`}
            />
            <ButtonGroup className="w-100">
              <button
                className="bi bi-dash-lg text-danger flex-1"
                onClick={() => handleCount(e._id, -1)}
              />
              <button className="btn flex-1">{e.count}</button>
              <button
                onClick={() => handleCount(e._id, 1)}
                className="bi bi-plus-lg text-success flex-1"
              />
            </ButtonGroup>
          </div>
        ))}
      </div>

      {step == 0 &&
        <div>
          <hr />
          <p className="my-2">
            <i className="bi bi-clock fs-20 ms-1 text-primary" />
            انتخاب زمان ارسال
          </p>
          <div className="d-flex align-items-start gap-4 overflow-auto w-full p-2">
            <ShippingTime />
          </div>
        </div>
      }


    </div>
  );
}
