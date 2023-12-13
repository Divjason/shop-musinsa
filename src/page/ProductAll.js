import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCard from "../component/ProductCard";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const getProducts = async () => {
    const url = `http://localhost:3004/products`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setProductList(data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Container>
      <Row>
        {productList.map((menu, index) => (
          <Col key={index} lg={3}>
            <ProductCard item={menu} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductAll;
