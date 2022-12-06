import React from "react";
import { useSelector } from "react-redux";
import { Col, Container, Form, Row, FormGroup } from "reactstrap";
import Helmet from "../component/Helmet/Helmet";
import CommonSection from "../component/UI/CommonSection";
import "../styles/checkout.css";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mb-4 fw-bold">Billing Information</h6>
              <Form className="billin__form">
                <FormGroup className="form__group">
                  <input type="text" placeholder="Enter your name" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder="Enter your email" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder="Enter your phone number" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder="Enter your street address" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder="Enter your city" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder="Enter your postal code" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder="Country" />
                </FormGroup>
              </Form>
            </Col>
            <Col lg="4">
              <div className="checkout__cart">
                <h6>
                  Total Qty:<span>{cart.totalQuantity} Items</span>
                </h6>
                <h6>
                  SubTotal:<span>${cart.totalAmount}</span>
                </h6>
                <h6>
                  Shipping:
                  <br />
                  free shipping
                  <span>$0</span>
                </h6>
                <h4>
                  Total Cost:<span>${cart.totalAmount}</span>
                </h4>
                <button className="buy__btn auth__btn w-100">
                  Place an order
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
