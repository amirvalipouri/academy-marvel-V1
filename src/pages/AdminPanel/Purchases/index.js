import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { Input, Select, Table, Pagination } from "../../../components";
import { paymentMethods, purchaseStatus } from "../../../constants";
import { convertPhone, jsonToXlsx, scrollToTop } from "../../../methods";
import { axios, moment } from "../../../boot";

export default function Purchases() {
  const basicParams = JSON.parse(sessionStorage.getItem("params")) ?? {};
  const navigate = useNavigate();
  const [params, setParams] = useState({ page: 1, ...basicParams });
  const [purchases, setPurchases] = useState([]);
  const [pages, setPages] = useState({});
  const saveParams = () => {
    const value = JSON.stringify(params);
    sessionStorage.setItem("params", value);
  };
  const getPurchases = () => {
    saveParams();
    const url = "/admins/shop/purchases";
    const config = {
      params: {
        sort: "createdAt:-1",
        perPage: 20,
        ...params,
      },
    };
    params.date &&
      ([config.params.startDate, config.params.endDate] = params.date);
    delete config.params.date;
    axios.get(url, config).then(({ data }) => {
      // setPurchases((p) => [...p, ...data.data]);
      setPurchases(data.data);
      setPages(data.pages);
      scrollToTop();
    });
  };
  const downloadXlsx = async () => {
    const url = "/admins/shop/purchases";
    const perPage = 100;
    const totalPages = Math.ceil(pages.totalItems / perPage);
    const config = (page) => ({ params: { ...params, perPage, page } });
    const getAllData = await [...Array(totalPages)]
      .map((e, i) => i + 1)
      .map(
        async (page) => await (await axios.get(url, config(page))).data?.data
      );
    const allData = await Promise.all(getAllData);
    const title = "report";
    const json = allData.flat().map((e) => ({
      "نام کاربر": `${e.shipping?.firstName} ${e.shipping?.lastName}`,
      "شماره موبایل": `${convertPhone(e.shipping?.phone)}`,
      تاریخ: moment.miladiToShamsi({ date: e.createdAt }),
      آدرس: e.shipping?.address,
      قیمت: `${e.totalPrice} تومان -  ${e.totalPriceUsd} تتر`,
      تخفیف: !!e.voucher
        ? `${e.offPrice} تومن -  ${e.offPriceUsd} تتر`
        : "بدون تخفیف",
      کالاها: e.items
        ?.map((e) => `${e.product?.title_fa} ${e.count} عدد`)
        .join(" - "),
      "نوع پرداخت": paymentMethods.find((mt) => mt.id === e.paymentMethod)
        ?.name,
      وضعیت: purchaseStatus.find((it) => it.id === e.status)?.name,
    }));
    jsonToXlsx({ json, title });
  };
  const formControls = [
    {
      label: "تاریخ",
      state: "date",
      type: "date",
      cancelBtn: true,
    },
    {
      tag: Select,
      label: "نوع پرداخت",
      state: "paymentMethod",
      cancelBtn: true,
      items: paymentMethods,
    },
    {
      tag: Select,
      label: "وضعیت",
      state: "status",
      cancelBtn: true,
      items: purchaseStatus.filter((e) => e.filterable),
    },
  ];
  const showStatus = (id = 0) => {
    const { color, name } = purchaseStatus.find((e) => e.id === id) ?? {};
    return <span className={`text-${color} fw-bold`}>{name}</span>;
  };
  useEffect(getPurchases, [params]);
  return (
    <React.Fragment>
      <div>
        <button
          className="bi bi-filetype-xlsx fs-3 text-success"
          onClick={downloadXlsx}
        />
      </div>
      <Row>
        {formControls.map((e) => (
          <Col key={e.state} xs="12" md="6" lg="4">
            {React.createElement(e.tag ?? Input, {
              ...e,
              value: params[e.state],
              setValue: (val) => {
                setPurchases([]);
                setParams((p) => ({ ...p, page: 1, [e.state]: val }));
              },
            })}
          </Col>
        ))}
      </Row>
      <Table>
        <thead>
          <tr>
            <th>نام کاربر</th>
            <th>تاریخ</th>
            <th>مبلغ نهایی</th>
            <th>تخفیف</th>
            <th>نوع پرداخت</th>
            <th>وضعیت</th>
          </tr>
        </thead>
        <tbody>
          {purchases.map((e, i) => (
            <tr key={e._id + i} onClick={() => navigate(e._id)}>
              <td>
                {e.user?.firstName} {e.user?.lastName}
              </td>
              <td>
                <span dir="ltr">
                  {moment.miladiToShamsi({
                    date: e.createdAt,
                    format: "jYYYY/jMM/jDD - HH:mm:ss",
                  })}
                </span>
              </td>
              <td className="text-success">{`${e.totalPrice} تومان -  ${e.totalPriceUsd} تتر`}</td>
              <td className="text-danger">
                {!!e.voucher
                  ? `${e.offPrice} تومن -  ${e.offPriceUsd} تتر`
                  : "بدون تخفیف"}
              </td>
              <td className="fw-bold">
                {paymentMethods.find((mt) => mt.id === e.paymentMethod)?.name}
              </td>
              <td>{showStatus(e.status)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination
        totalPages={pages.totalPages}
        activePage={params.page}
        setActivePage={(page) => setParams((p) => ({ ...p, page }))}
      />
      {/* {params.page < pages.totalPages && (
        <button
          className="d-block mx-auto w-fit text-primary"
          onClick={() => {
            setParams((p) => ({ ...p, page: p.page + 1 }));
          }}
        >
          نمایش بیشتر...
        </button>
      )} */}
    </React.Fragment>
  );
}
