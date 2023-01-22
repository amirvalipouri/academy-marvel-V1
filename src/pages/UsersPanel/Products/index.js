import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { axios } from "../../../boot";
import { ProductCard } from "../../../components";
import NewProductCard from "../../../components/NewVersion/NewProductCard";
import SearchBox from "../../../components/NewVersion/SearchBox";



export default function Products() {
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    const url = "/pub/shop/products";
    axios.get(url).then(({ data }) => {
      setProducts(data.data);
    });
  };
  useEffect(getProducts, []);
  return (
    <Container>
      <Row className="">
        <Row className="my-4 d-flex flex-col align-items-start flex-lg-row justify-content-lg-between align-items-lg-center" xs="12" md="12" lg="12" xl="12">
          <Col xs="12" md="6" lg="4" xl="3">
            <p className="fs-18 fw-700 text-black">فروشگاه مارول</p>
          </Col>

          <Col xs="12" md="6" lg="4" xl="3">
            <SearchBox className="rounded-10px border " />
          </Col>
        </Row>
        {products.map((e) => (
          <Col key={e._id} xs="12" md="6" lg="4" xl="3">
            <NewProductCard {...e} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
