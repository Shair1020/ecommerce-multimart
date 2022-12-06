import React from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import products from "../assets/data/products";
import Helmet from "../component/Helmet/Helmet";
import CommonSection from "../component/UI/CommonSection";
import ProductsList from "../component/UI/ProductsList";
import { motion } from "framer-motion";
import "../styles/product.details.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addItem } from "../redux/slices/cartSlice";
import { useRef } from "react";
import { useEffect } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const reviewUser = useRef("");
  const reviewMsg = useRef("");
  const [tab, setTab] = useState("desc");
  const [rating, setRating] = useState(null);
  const product = products.find((item) => item.id === id);
  const {
    imgUrl,
    price,
    productName,
    avgRating,
    reviews,
    description,
    shortDesc,
    category,
  } = product;

  const relatedProducts = products.filter((item) => item.category === category);

  const submitHandler = (e) => {
    e.preventDefault();
    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;

    const reviewObj = {
      author: reviewUserName,
      text: reviewUserMsg,
      rating,
    };

    console.log(reviewObj);
    toast.success("Review submitted", { position: "bottom-center" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  const addToCart = () => {
    dispatch(
      addItem({
        id,
        productName,
        price,
        image: imgUrl,
      })
    );
    toast.success("Product added successfully", { position: "bottom-center" });
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <Helmet title={`${productName}`}>
      <CommonSection title={productName} />
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt="" />
            </Col>
            <Col lg="6">
              <div className="product__details">
                <h2>{productName}</h2>
                <div className="product__rating d-flex align-items-center gap-5 mb-3">
                  <div>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-half-s-fill"></i>
                    </span>
                  </div>
                  <p>
                    (<span>{avgRating}</span> ratings)
                  </p>
                </div>
                <div className="d-flex align-items-center gap-8">
                  <span className="product__price">${price}</span>
                  <span className="m-2"><strong>Category:</strong>{capitalizeFirstLetter(category)}</span>
                </div>
                <p>{shortDesc}</p>
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="buy__btn"
                  onClick={addToCart}
                >
                  Add to Cart
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tab__wrapper d-flex align-items-center gap-5">
                <h6
                  className={`${tab === "desc" ? "active_tab" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === "rev" ? "active_tab" : ""}`}
                  onClick={() => setTab("rev")}
                >
                  Reviews ({reviews.length})
                </h6>
              </div>
              {tab === "desc" ? (
                <div className="tab__content mt-5">
                  <p>{description}</p>
                </div>
              ) : (
                <div className="product__review mt-5">
                  <div className="review__wrapper">
                    <ul>
                      {reviews?.map((item, index) => (
                        <li key={index} className="mb-4">
                          <h6>Jhon Doe</h6>
                          <span>{item.rating} (rating)</span>
                          <p>{item.text}</p>
                        </li>
                      ))}
                    </ul>
                    <div className="review__form">
                      <h4>Leave your Experience</h4>
                      <form action="" onSubmit={submitHandler}>
                        <div className="form__group">
                          <input
                            type="text"
                            placeholder="Enter a name"
                            ref={reviewUser}
                            required
                          />
                        </div>
                        <div className="form__group d-flex align-items-center gap-5">
                          <span onClick={() => setRating(1)}>
                            1<i class="ri-star-s-fill"></i>
                          </span>
                          <span onClick={() => setRating(2)}>
                            2<i class="ri-star-s-fill"></i>
                          </span>
                          <span onClick={() => setRating(3)}>
                            3<i class="ri-star-s-fill"></i>
                          </span>
                          <span onClick={() => setRating(4)}>
                            4<i class="ri-star-s-fill"></i>
                          </span>
                          <span onClick={() => setRating(5)}>
                            5<i class="ri-star-s-fill"></i>
                          </span>
                        </div>
                        <div className="form__group">
                          <textarea
                            rows={4}
                            type="text"
                            ref={reviewMsg}
                            placeholder="Review Message..."
                            required
                          />
                        </div>
                        <button type="submit" className="buy__btn">
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </Col>
            <Col lg="12 mt-5">
              <h2 className="related__title">You might also like</h2>
            </Col>
            <ProductsList products={relatedProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
