import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowUp, Facebook, Instagram, Twitter, Youtube } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

function Footer() {
  const [isVisible, setVisible] = useState(false)
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  const listenToScroll = () => {
    let heightToHidden = 250;
    const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    windowScroll > heightToHidden ? setVisible(true) : setVisible(false);
  }
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll)
  })
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className='text-center'>
                <h5>Location</h5>
                <p>5505 Waterford District</p>
                <p>Dr, Miami, FL 33126</p>
                <p>United States</p>
              </div>
            </Col>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className='text-center'>
                <h5>Working Hours</h5>
                <p>Mon-Fri: 9:00AM - 10:00PM</p>
                <p>Saturday: 10:00AM - 8:30PM</p>
                <p>Sunday: 12:00PM - 5:00PM</p>
              </div>
            </Col>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className='text-center'>
                <h5>Order Now</h5>
                <p>Quaerat neque purus ipsum</p>
                <p><Link to="tel:9998887777" className='calling'>999-888-7777</Link></p>
                <p>United States</p>
              </div>
            </Col>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className='text-center'>
                <h5>Follow Us</h5>
                <p>Quaerat neque purus ipsum</p>
                <ul className='list-unstyled text-center mt-2'>
                  <li><Link><Facebook /></Link></li>
                  <li><Link><Twitter /></Link></li>
                  <li><Link><Instagram /></Link></li>
                  <li><Link><Youtube /></Link></li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row className='copy_right'>
            <Col>
              <div>
                <ul className='list-unstyled text-center mb-0'>
                  <li>
                    <Link to="/">© 2025 <span>SANTOSH</span>. All Rights Reserved</Link>
                    <li><Link to="/">About Us</Link></li>
                    <li><Link to="/">Terms Of Use</Link></li>
                    <li><Link to="/">Privacy Policy</Link></li>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
      {isVisible && (<div className='scroll_top' onClick={scrollTop}>
        <ArrowUp />
      </div>)}
      
    </>
  )
}

export default Footer
