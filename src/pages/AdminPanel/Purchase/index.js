import React, { useEffect, useState } from "react";
import { ButtonGroup, Col, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { axios } from "../../../boot";
import { Button, Form, Input, Modal } from "../../../components";
import { rules, purchaseStatus } from "../../../constants";
import { toast } from "../../../methods";
import MailingLabel from "./MailingLabel";
import PayInfo from "./PayInfo";
import ShowInfo from "./ShowInfo";

export default function Purchase() {
  const params = useParams();
  const [showModal, setShowModal] = useState(false);
  const [info, setInfo] = useState({});
  const [reason, setReason] = useState("");
  const getInfo = () => {
    const url = `/admins/shop/purchases/${params.id}`;
    axios.get(url).then(({ data }) => {
      setInfo(data);
    });
  };
  const updateStatus = (status = "") => {
    setInfo((p) => ({ ...p, status }));
  };
  const verifyPurchase = (status = "") => {
    const url = "/admins/shop/purchases/verify";
    const body = {
      _id: params.id,
      status,
      reason,
    };
    axios.post(url, body).then(() => {
      toast({});
      updateStatus(status);
      setShowModal(false);
    });
  };
  const updatePurchase = (status = "") => {
    const url = "/admins/shop/purchases/update-purchase";
    const body = { _id: params.id, status };
    axios.post(url, body).then(() => {
      toast({});
      updateStatus(status);
    });
  };

  const showChangeStatus = !purchaseStatus
    .filter((e) => e.isUpdateStatus)
    .map((e) => e.id)
    .includes(info.status);
  useEffect(getInfo, []);
  return (
    <React.Fragment>
      <Row className="row-gap-4 d-print-none">
        <ShowInfo data={info} />
        {info.pay && <PayInfo pay={info.pay} />}
        {info.status !== "rejected" && (
          <Col xs="12" className="d-print-none d-flex flex-center">
            <ButtonGroup>
              {showChangeStatus ? (
                <React.Fragment>
                  <Button
                    variant="success"
                    onClick={() => verifyPurchase("accepted")}
                  >
                    تایید پرداخت
                  </Button>
                  <Button variant="danger" onClick={() => setShowModal(true)}>
                    رد پرداخت
                  </Button>
                </React.Fragment>
              ) : (
                purchaseStatus
                  .filter((e) => e.updatable)
                  .map((e) => (
                    <Button
                      key={e.id}
                      variant={e.color}
                      onClick={() => updatePurchase(e.id)}
                    >
                      {e.name}
                    </Button>
                  ))
              )}
            </ButtonGroup>
          </Col>
        )}
      </Row>
      <MailingLabel info={info} />
      <Button
        className="d-print-none mt-5 d-block mx-auto"
        onClick={window.print}
      >
        پرینت برچسب پستی و فاکتور
      </Button>
      <Modal
        show={showModal}
        onHide={setShowModal}
        title="دلیل رد پرداخت"
        type="danger"
      >
        <Form onSubmit={() => verifyPurchase("rejected")} className="row">
          <Col xs="12">
            <Input
              label="توضیحات"
              as="textarea"
              value={reason}
              setValue={setReason}
              rules={rules.required}
            />
          </Col>
          <Col xs="12">
            <Button type="submit" className="w-100">
              ثبت دلیل و رد پرداخت
            </Button>
          </Col>
        </Form>
      </Modal>
    </React.Fragment>
  );
}
