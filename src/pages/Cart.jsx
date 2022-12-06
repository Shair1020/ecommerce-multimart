import React from "react";
import "../styles/cart.css";
import Helmet from "../component/Helmet/Helmet";
import CommonSection from "../component/UI/CommonSection";
import { Col, Container, Row } from "reactstrap";
import { motion } from "framer-motion";
import { deleteItem } from "../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const deleteItems = (id) => {
    dispatch(deleteItem(id));
  };
  return (
    <Helmet title="Cart">
      <CommonSection title="Shopping Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              <table className="table bordered">
                {cartItems.length === 0 ? (
                  <h2>No item added to the cart..!</h2>
                ) : (
                  <>
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th className="text-center">Title</th>
                        <th className="text-center">Price</th>
                        <th className="text-center">Qty</th>
                        <th className="text-center">Delete</th>
                      </tr>
                    </thead>
                    {cartItems.map((item) => (
                      <tbody>
                        <>
                          <tr>
                            <td>
                              <img src={item.imgUrl} alt="" />
                            </td>
                            <td className="text-center">{item.productName}</td>
                            <td className="text-center">${item.price}</td>
                            <td className="text-center">{item.quantity}</td>
                            <td className="text-center">
                              <motion.i
                                onClick={() => deleteItems(item.id)}
                                class="ri-delete-bin-line"
                                whileTap={{ scale: 1.2 }}
                              ></motion.i>
                            </td>
                          </tr>
                        </>
                      </tbody>
                    ))}
                  </>
                )}
              </table>
            </Col>
            <Col lg="3">
              <div>
                <h6 className="d-flex align-items-center justify-content-between">
                  <strong>SubTotal</strong>
                  <span className="fs-4 fw-bold">${totalAmount}</span>
                </h6>
              </div>
              <p className="fs-6 mt-2 bold">Taxes and shipping will calculate in checkout</p>
              <div>
                <button className="buy__btn w-100">
                  <Link to="/shop">Continue Shopping</Link>
                </button>
                <button className="buy__btn w-100 mt-3">
                  <Link to="/checkout">Checkout</Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Cart;
