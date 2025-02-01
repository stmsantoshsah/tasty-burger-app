import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Burger from '../../assets/hero/hero-2.png'
function HeroBanner() {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg={7} className="mb-5 mb-lg-0">
                        <div className='position:relative'>
                            <img src={Burger} alt="HeroImage" className="img-fluid" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HeroBanner
