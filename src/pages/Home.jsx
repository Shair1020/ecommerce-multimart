import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Helmet from '../component/Helmet/Helmet'
import heroImg from "../../src/assets/images/hero-img.png"
import "../styles/home.css"
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Service from '../services/Service'
import ProductList from "../component/UI/ProductsList"

const Home = () => {
  return <Helmet title={"Home"}>
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="hero__content">
              <p className="hero__subtitle">
                Trending product in {new Date().getFullYear()}
              </p>
              <h2>Make Your Interior Minimalistics & Modern</h2>
              <p>Building a successful furniture business demands more than just creating beautiful furniture.
                Most buyers see furniture as a long-term relationship, which means your products need to be
                in front of the right people at the right time and they need to make a positive,
                lasting impression.</p>
              <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                <Link to='/shop'>SHOP NOW</Link>
              </motion.button>
            </div>
          </Col>
          <Col lg='6' md='6'>
            <div className="hero__img">
              <img src={heroImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <Service />
    <section className='trending__products'>
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2 className='section__title'>Trending Poducts</h2>
          </Col>
          <ProductList />
        </Row>
      </Container>

    </section>
  </Helmet>
}

export default Home