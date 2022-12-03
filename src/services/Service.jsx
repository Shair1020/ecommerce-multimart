import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import "./service.css"
import serviceData from "../assets/data/serviceData"

const Service = () => {
    return <section className='services'>
        <Container>
            <Row>
                {
                    serviceData.map((item, index) => {
                        return (
                            <>
                                <Col lg='3' md="4" key={index}>
                                    <div className="service__item" style={{ background: `${item.bg}` }}>
                                        <span>
                                            <i className={item.icon}></i>
                                        </span>
                                        <div>
                                            <h3>{item.title}</h3>
                                            <p>{item.subtitle}</p>
                                        </div>
                                    </div>
                                </Col>
                            </>
                        )
                    })
                }
            </Row>
        </Container>

    </section>
}

export default Service