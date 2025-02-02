import React from 'react'
import { Col, Container, Row, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import StoreIos from '../../assets/shop/appstore.png'
import StoreAndroid from '../../assets/shop/googleplay.png'
import DownloadImg from '../../assets/shop/e-shop.png'
import Brand1 from "../../assets/brands/brand-11.png"
import Brand2 from "../../assets/brands/brand-12.png"
import Brand3 from "../../assets/brands/brand-13.png"
import Brand4 from "../../assets/brands/brand-14.png"
import Brand5 from "../../assets/brands/brand-15.png"
import Brand6 from "../../assets/brands/brand-16.png"
import Brand7 from "../../assets/brands/brand-17.png"
import Brand8 from "../../assets/brands/brand-18.png"
function Shop() {
    return (
        <>
            <section className='shop_section'>
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={6} className='text-center text-lg-start mb-5 mb-lg-0'>
                            <h4>Download mobile App and</h4>
                            <h2>save up to 20%</h2>
                            <p> Aliquam a augue suscipit, luctus neque purus ipsum and neque
                                dolor primis libero tempus, blandit varius</p>
                            <Link to="/" className=''><img src={StoreIos} alt="Ios" className='img-fluid store me-3' /></Link>
                            <Link to="/" className=''><img src={StoreAndroid} alt="Android" className='img-fluid store me-3' /></Link>
                        </Col>
                        <Col lg={6}>
                            <img src={DownloadImg} alt="e-shop" className='img-fluid' />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='brand_section'>
                <Container>
                    <Row>
                        <Carousel>
                            <Carousel.Item>
                                <Carousel.Caption>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <div className="brand_img">
                                            <img src={Brand1} alt="brand_img" className='img-fluid'/>
                                        </div>
                                        <div className="brand_img">
                                            <img src={Brand2} alt="brand_img" className='img-fluid'/>
                                        </div>
                                        <div className="brand_img">
                                            <img src={Brand3} alt="brand_img" className='img-fluid'/>
                                        </div>
                                        <div className="brand_img">
                                            <img src={Brand4} alt="brand_img" className='img-fluid'/>
                                        </div>
                                        <div className="brand_img">
                                            <img src={Brand5} alt="brand_img" className='img-fluid'/>
                                        </div>
                                        <div className="brand_img">
                                            <img src={Brand6} alt="brand_img" className='img-fluid'/>
                                        </div>
                                        <div className="brand_img">
                                            <img src={Brand7} alt="brand_img" className='img-fluid'/>
                                        </div>
                                        <div className="brand_img">
                                            <img src={Brand8} alt="brand_img" className='img-fluid'/>
                                        </div>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Carousel.Caption>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <div className="brand_img">
                                            <img src={Brand8} alt="brand_img" className='img-fluid'/>
                                        </div>
                                        <div className="brand_img">
                                            <img src={Brand7} alt="brand_img" className='img-fluid'/>
                                        </div>
                                        <div className="brand_img">
                                            <img src={Brand3} alt="brand_img" className='img-fluid'/>
                                        </div>
                                        <div className="brand_img">
                                            <img src={Brand4} alt="brand_img" className='img-fluid'/>
                                        </div>
                                        <div className="brand_img">
                                            <img src={Brand7} alt="brand_img" className='img-fluid'/>
                                        </div>
                                        <div className="brand_img">
                                            <img src={Brand6} alt="brand_img" className='img-fluid'/>
                                        </div>
                                        <div className="brand_img">
                                            <img src={Brand7} alt="brand_img" className='img-fluid'/>
                                        </div>
                                        <div className="brand_img">
                                            <img src={Brand8} alt="brand_img" className='img-fluid'/>
                                        </div>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>

                        </Carousel>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Shop
